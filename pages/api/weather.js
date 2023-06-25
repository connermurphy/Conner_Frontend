import axios from 'axios';

export default async function handler(req, res) {
    
    const API_KEY = process.env.WEATHER_API_KEY;

    const weatherResponse = {};

    return new Promise((resolve, reject) => {

        //fecth weather    
        axios({
            url: `https://api.openweathermap.org/data/2.5/weather?lat=55.8734422&lon=-4.2892846&exclude={part}&appid=${API_KEY}`
        }).then(result => {
            
            const { weather, dt } = result.data;
        
            weatherResponse.icon = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
            weatherResponse.time = dt;

            res.status(200).json(weatherResponse);
            resolve();

        }).catch(err => {
            
            weatherResponse.icon = 'http://openweathermap.org/img/wn/03d@2x.png';

            res.status(500).json(weatherResponse);
            reject();
        });  

    })  

}