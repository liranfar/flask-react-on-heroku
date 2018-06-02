import axios from 'axios'

export default (logMessage) => {
  console.log(logMessage);
  axios.get(`${process.env.REACT_APP_USERS_SERVICE_URL}/users/ping`, {
                  // params :{
                  //     dataType: 'json'
                  // }
              })
                  .then(function (response) {
                      console.log('SUCCESS', response)
                  })
                  .catch(function (error) {
                      console.log('ERROR', error)
                  });
}
