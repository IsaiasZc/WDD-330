export const getJSON = async (url) => {
  return fetch(url)
    .then(response => {
      if(!response.ok) {
        throw new Error(response.statusText)
      } else {

        return response.json()
      }
    })
    .catch(err => console.log(err))
};

export const getLocation = function(options) {
  return new Promise( function(resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });
};


export default {
  getJSON,
  getLocation
}