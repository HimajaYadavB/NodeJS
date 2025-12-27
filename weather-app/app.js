const request = require('postman-request')

const url = 'https://api.weatherstack.com/current?access_key=4c764706c17f9daab27a832ce329f860&query=37.8267,-122.4233&units=f'

request({ url: url, json:true },(error, response)=>{
    // console.log(response);
    // const data = JSON.parse(response.body);
    // console.log(data.current);
    console.log(response.body.current)  
    console.log(response.body.current.weather_descriptions[0]+" It is currently "+response.body.current.temperature+" out. It feels like "+response.body.current.feelslike+" degrees out.")
})

//Geocoding

// request({url:url, json:true},(error,response)=>{
//     console.log("It is currently "+response.body.current.temperature+" out. It feels like "+response.body.current.feelslike+" degrees out.")
// })
// console.log('Staring up')

// setTimeout(()=>{
//     console.log('2 seconds timer!')
// },2000)

// setTimeout(()=>{
//     console.log('0 seconds timer!')
// },0)

// console.log('Finishing up')