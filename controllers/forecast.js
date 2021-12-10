const request = require("request");

const forecast=(longtitude,latitude,callback)=>{
    const url  = `http://api.weatherstack.com/current?access_key=a8e8b7aaa7b0a5b80cc2e1925c734f28&query=${longtitude},${latitude}`
    request({url,json:true},(err,res) => {
        if (err) {
           callback(err,undefined)
        }else if (res.body.error) {
            callback(res.body.error.type,undefined)
        }
       else
    callback(undefined,res.body.current.temperature+" "+res.body.current.weather_descriptions[0])
    })
}

module.exports =forecast