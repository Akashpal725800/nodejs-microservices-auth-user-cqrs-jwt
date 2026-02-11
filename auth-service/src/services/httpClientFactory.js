const axios = require('axios');

class HttpClientFactory {
  static create(baseURL) {
    return axios.create({ baseURL });
  }
}
  
module.exports = HttpClientFactory;
