const http = require('http');
const base_api_url = 'http://api.aviationstack.com/v1/flights?access_key=e6d9509b6c2f437edb81d6e01b68da87'


// Have done a quick and dirty CORS fix
const getResponse = async(url) => {
  let dataString = '';

  const response = await new Promise((resolve, reject) => {
    const req = http.get(url, (res) => {
      res.on('data', chunk => {
        dataString += chunk;
      });
      res.on('end', () => {
        resolve({
            statusCode: 200,
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Credentials': true,
            },
            body: JSON.stringify(JSON.parse(dataString), null)
        });
      });
    })

    req.on('error', (e) => {
      reject({
          statusCode: 500,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
          },
          body: 'Something went wrong!'
      });
    });
  });

  return response;
}

exports.fetchData = async (event)=> {
  const api_url = `${base_api_url}&flight_status=active&min_delay_dep=1&max_delay_dep=20&min_delay_arr=1`
  const response = getResponse(api_url)

  return response;
}

exports.fetchSpecificFlightData = async (event)=> {
  // URL path params
  const airport = event.pathParameters.airport
  const id = event.pathParameters.id

  const api_url = `${base_api_url}&dep_icao=${airport}&flight_icao=${id}`
  const response = getResponse(api_url)

  return response;
}