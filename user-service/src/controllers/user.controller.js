const CreateUserCommand = require('../commands/createUser.command');
const createUserHandler = require('../handlers/createUser.handler');

const GetUserByEmailQuery = require('../queries/getUserByEmail.query');
const getUserByEmailHandler = require('../handlers/getUserByEmail.handler');

exports.createUser = async (req, res) => {
  const command = new CreateUserCommand(req.body);
  const user = await createUserHandler(command);
  res.json(user);
};

exports.getUserByEmail = async (req, res) => {
  const query = new GetUserByEmailQuery(req.params.email);
  const user = await getUserByEmailHandler(query);
  res.json(user);
};
