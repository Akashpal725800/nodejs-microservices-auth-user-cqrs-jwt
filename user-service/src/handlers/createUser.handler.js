const User = require('../models/user.model');

module.exports = async (command) => {
  return await User.create(command.data);
};
