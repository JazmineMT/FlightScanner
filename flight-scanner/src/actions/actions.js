import axios from 'axios'

export const FETCH_TRIPDATA_START = "FETCH_TRIPDATA_START" 
export const FETCH_TRIPDATA_SUCCESS = "FETCH_TRIPDATA_SUCCESS" 
export const FETCH_TRIPDATA_FAILURE = "FETCH_TRIPDATA_FAILURE" 

export const fetchTripData = (city) => {
    return dispatch => {
        console.log(city)
        dispatch({type: FETCH_TRIPDATA_START})
        var unirest = require("unirest");

        var req = unirest("GET", "https://tripadvisor1.p.rapidapi.com/locations/search");

        req.query({
        "location_id": "1",
        "limit": "30",
        "sort": "relevance",
        "offset": "0",
        "lang": "en_US",
        "currency": "USD",
        "units": "km",
        "query": `${city.city}`
        });

        req.headers({
        "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
        "x-rapidapi-key": "189768cf40msh6511abd2f173f5ep133badjsnfe936b953a3a",
        "useQueryString": true
        });


        req.end(function (res) {
        if (res.error) throw new Error(res.error);
            
        const lodging = res.body.data.filter( e => {
            if(e.result_type === 'lodging'){
               return { e}
            }
        })
        
        const thingsToDo = res.body.data.filter( e => {
            if(e.result_type === 'things_to_do'){
               return { e}
            }
        })

        const activities = res.body.data.filter( e => {
            if(e.result_type === 'activities'){
               return { e}
            }
        })

        const airport = res.body.data.filter( e => {
            if(e.result_type === 'airport'){
               return { e}
            }
        })

        const location = res.body.data.filter( e => {
            if(e.result_type === 'geos'){
               return { e}
            }
        })

        

        dispatch({type: FETCH_TRIPDATA_SUCCESS , payload: lodging , payload2:thingsToDo , payload3: activities, payload4: airport , payload5: location})
        console.log(res.body.data);
        });
        
    }
}