const User = require('../models/user.model');

module.exports = async (query) => {
  return await User.findOne({ email: query.email });
};
