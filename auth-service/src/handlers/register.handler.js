const User = require('../model/user.model'); // auth DB model
const { publishUserRegistered } = require('../utils/rabbitmq');
const bcrypt = require('bcrypt');

module.exports = async (command) => {
  const { name, email, password } = command.data;

  // 🔥 1️⃣ Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // 🔥 2️⃣ Save in Auth DB
  const user = await User.create({
    name,
    email,
    password: hashedPassword
  });

  console.log("Saved in Auth DB ✅");

  // 🔥 3️⃣ Publish event
 publishUserRegistered({
  authId: user._id.toString(),
  name: user.name,
  email: user.email
});


  console.log("Event published ✅");

  return {
    message: "User registered successfully",
    user
  };
};


