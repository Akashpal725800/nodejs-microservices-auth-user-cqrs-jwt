const amqp = require('amqplib');

let channel;

async function connect() {
  const connection = await amqp.connect('amqp://localhost');
  channel = await connection.createChannel();

  // 🔥 Fanout exchange create
  await channel.assertExchange('user_events', 'fanout', {
    durable: true
  });
}

function publishUserRegistered(data) {
  channel.publish(
    'user_events',   // exchange
    '',              // routing key empty for fanout
    Buffer.from(JSON.stringify(data))
  );
}

module.exports = { connect, publishUserRegistered };
