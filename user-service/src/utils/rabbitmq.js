const amqp = require("amqplib");
const createUserHandler = require("../handlers/createUser.handler.js");

async function consume() {
  try {
    console.log("Connecting to RabbitMQ...");

    const connection = await amqp.connect("amqp://localhost:5672");
    const channel = await connection.createChannel();

    console.log("Channel created");

    // 🔥 Fanout exchange create
    await channel.assertExchange("user_events", "fanout", {
      durable: true,
    });

    // 🔥 Create private queue for this service
    const q = await channel.assertQueue("", { exclusive: true });

    // 🔥 Bind queue to exchange
    await channel.bindQueue(q.queue, "user_events", "");

    console.log("Waiting for messages from user_events exchange...");

    channel.consume(
      q.queue,
      async (msg) => {
        if (!msg) return;

        try {
          const data = JSON.parse(msg.content.toString());
          console.log("Message received:", data);

          await createUserHandler({ data });

          channel.ack(msg);
          console.log("User saved in DB ✅");
        } catch (error) {
          console.error("Error processing message:", error);
          channel.nack(msg, false, false);
        }
      },
      { noAck: false }
    );
  } catch (error) {
    console.error("RabbitMQ consume error:", error);
  }
}

module.exports = { consume };
