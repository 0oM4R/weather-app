const forecast=require('./controllers/forecast')
const geocode=require('./controllers/geocode')

const location =process.argv[2];
if(location){
geocode(location,(err,data) => {
    if(err) {
        console.log(err)
    }
    else {
        forecast(data.longtitude, data.latitude,(err,data) => {
            if(err) {
                console.log(err)
            }
            else {
                console.log(data)
            }
        })
    }
})
}else{
    console.log("Please enter a location name example:( node app.js cairo)")
}

