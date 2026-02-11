const HttpClientFactory = require('./httpClientFactory');

const client = HttpClientFactory.create(process.env.USER_SERVICE_URL);

exports.createUser = (data) => {
  return client.post('/user/create', data); // ✅ yaha /user lagao
};

exports.getUserByEmail = (email) => {
  return client.get(`/user/${email}`); // ✅ yaha bhi
};
