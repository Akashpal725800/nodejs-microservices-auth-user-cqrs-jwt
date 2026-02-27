const CreateUserCommand = require('../commands/createUser.command');
const createUserHandler = require('../handlers/createUser.handler');

const GetUserByEmailQuery = require('../queries/getUserByEmail.query');
const getUserByEmailHandler = require('../handlers/getUserByEmail.handler');

exports.createUser = async (req, res) => {
  try {
    // 🔥 authId token se lo, body se nahi
    const command = new CreateUserCommand({
      email: req.body.email,
      name: req.body.name,
      phone: req.body.phone,
      address: req.body.address
    });

    const user = await createUserHandler(command);
    res.status(201).json(user);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getUserByEmail = async (req, res) => {
  try {
    const query = new GetUserByEmailQuery(req.params.email);
    const user = await getUserByEmailHandler(query);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
