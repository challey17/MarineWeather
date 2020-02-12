"use strict";
// ok here we go

function displayCurrentWeater() {}

console.log(Date.now());

//testing fetch api

const lat = 27.7;
const lng = -82.74;
const currrentTime = Date.now();

const params = [
  "airTemperature",
  "windDirection",
  "windSpeed",
  "gust",
  "waterTemperature"
].join(",");

fetch(
  `https://api.stormglass.io/v1/weather/point?lat=${lat}&lng=${lng}&params=${params}&time=${currrentTime}&source=sg`,
  {
    headers: {
      Authorization:
        "db77f6ce-46f5-11ea-8bd6-0242ac130002-db77f7e6-46f5-11ea-8bd6-0242ac130002"
    }
  }
)
  .then(response => response.json())
  .then(jsonData => {
    // Do something with response data.
    console.log(jsonData);
  });

// need to make  function(s) to convert metric units ,
// moonrise/set sunrise/set will return a UTC timestamp, need to convert to local time
// look at this https://stackoverflow.com/questions/3552461/how-to-format-a-javascript-date
//toLocaleDateString() or toLocaleString() <<< provides date and time when called without params
