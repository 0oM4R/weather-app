# Node app to know the weather using 

 

## how is it works?
Using [Mapbox](https://www.mapbox.com/) API, its provide detailed info about the weather in the entered location.

There is two functions that perform dealing with the api:

1. `geocode` : To get the exact longitude and latitude of the entered location and pass them to the second function
2. `forecast` : To get the information about the given location and we get only `current.temperature` and the first item in `current.weather_descriptions` array
 
## Installation 
 
  - required node and npm

 

  - open the folder in terminal on terminal run :


  `$npm install`
  
  
  `$node app.js #location `
