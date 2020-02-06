const axios = require('axios')
const qs = require('qs')

exports.handler = async function(event, context) {
  let { REACT_APP_API_KEY } = process.env;
  REACT_APP_API_KEY = REACT_APP_API_KEY.replace(/['"]/g, ""); // remove inserted quotes by netlify

  const query = event.queryStringParameters.query || 'cats';
  
  // https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${REACT_APP_API_KEY}&tags=${query}&per_page=24&format=json&nojsoncallback=1
  const API_PARAMS = {
    method: "flickr.photos.search",
    api_key: REACT_APP_API_KEY,
    tags: query,
    per_page: 24,
    format: "json",
    nojsoncallback: 1
  };
  const URL = `https://www.flickr.com/services/rest/`;

  // console.log('Constructed URL is ...', URL);
  console.log('searching for query: ', query);

  try {
    const { data } = await axios.get(URL, {
      params: API_PARAMS
    });
    
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    }
  } catch (error) {
    const { status, statusText, headers, data } = error.response
    return {
      statusCode: error.response.status,
      body: JSON.stringify({ status, statusText, headers, data })
    }
  }
}
