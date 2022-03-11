import { getJSON, getLocation } from './utilities.js';

const baseUrl ='https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02';

function testGetQuakesForLocation() {
    let latitude;
    let geoURL;
    // call the getLocation function to get the lat/long
    getLocation()
    .then(data => {
        console.log("In the then: " + data.coords.latitude);
        latitude = data.coords.latitude;
        geoURL = buildURL(data.coords);
    })
    .catch(err => console.error(err))  
    //you can't put anything after the function call because it runs before the asynchronos .then()
}

function buildURL(coords){
    const geoURL = baseUrl + `&latitude=${coords.latitude}&longigude=${coords.longitude}`;
    console.log("Built the final URL " + geoURL);
}
 testGetQuakesForLocation();