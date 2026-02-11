const userService = require('../services/user.service');
const { generateToken } = require('../utils/jwt');

module.exports = async (data) => {
  const userRes = await userService.getUserByEmail(data.email);
  const user = userRes.data;

  if (!user) throw new Error('User not found');

  const token = generateToken(user);

  return { user, token };
};
