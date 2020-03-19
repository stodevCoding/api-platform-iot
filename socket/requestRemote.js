const axios = require('axios');


module.exports =  {

  addPlayer: () => {
    // Send a POST request
    axios({
      method: 'post',
      url: 'https://localhost:8443/greetings',
      data: {
        name: 'Anto'
      }
    })
  },

  getListGame: () => {
    axios.get('https://localhost:8443/greetings?page=1')
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
    })
  },
}












