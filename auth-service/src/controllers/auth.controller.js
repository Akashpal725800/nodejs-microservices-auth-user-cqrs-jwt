const RegisterCommand = require('../commands/register.command.js');
const registerHandler = require("../handlers/register.handler.js");
const loginHandler = require("../handlers/login.handler.js"); 


exports.register = async (req, res) => {
  const command = new RegisterCommand(req.body);
  const result = await registerHandler(command);
  res.json(result);
};

exports.login = async (req, res) => {
  const result = await loginHandler(req.body);
  res.json(result);
};

