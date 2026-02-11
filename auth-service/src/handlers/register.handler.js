const userService = require('../services/user.service');

module.exports = async (command) => {
  const user = await userService.createUser(command.data);
  return user.data;
};
