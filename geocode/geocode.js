const request = require('request');

var geocodeAddress = (address,callback) => {
    var encodeAddress = encodeURIComponent(address);
    request ({
        url:`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeAddress}.json?access_token=pk.eyJ1IjoidmlqYXlyYWphbiIsImEiOiJjbGRxZ3lqb2sxZDc2M3dxdTAzNmk4d2ZxIn0.DJ1ZhXxh2U2tDMf1szOXmg`,
        json:true
    },(error,response,body)=> {
     console.log(`${body.features[0].place_name}`)
     if(error)
     {
        callback('Unable to contact Servers');
        //console.log('Unable to conncet google Servers');
     }
     else if(body.status === 'ZERO_RESULTS')
     {
         callback('Unable to find address');
      //console.log('Unable to find address');
     }
     else
     {
         callback(undefined,{
             address: body.features[0].place_name,
             latitude: body.features[0].geometry.coordinates[1],
             longitude: body.features[0].geometry.coordinates[0]
         });
    console.log(`Address: ${body.features[0].place_name}`);
    //  console.log(`Latitude: ${body.results[0].geometry.location.lat},Longitude: ${body.results[0].geometry.location.lng} `);
     }
    });
}

module.exports.getAddress = geocodeAddress;