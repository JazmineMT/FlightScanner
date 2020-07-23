import {FETCH_TRIPDATA_FAILURE, FETCH_TRIPDATA_START,FETCH_TRIPDATA_SUCCESS} from '../actions/actions'

export const initailState = {
    isLoading: false,
    thingsToDO: [],
    lodging: [],
    activities: [],
    airports: [],
    location: [],

}

export const reducer = (state = initailState, action) => {
    switch(action.type) {

        case FETCH_TRIPDATA_START : 
        return {
            ...state, 
            isLoading: true
        }
        case FETCH_TRIPDATA_SUCCESS : 
        return {
            ...state, 
            isLoading: false,
            thingsToDO: action.payload2,
            lodging: action.payload,
            activities: action.payload3,
            airports: action.payload4,
            location: action.payload5
        }
        default:
            return state
    }
}