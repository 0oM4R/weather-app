const forecast=require('./controllers/forecast')
const geocode=require('./controllers/geocode')

const location =process.argv[2];
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

