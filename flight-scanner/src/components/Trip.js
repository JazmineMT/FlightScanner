import React , {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {fetchTripData} from '../actions/actions'

const initiailFormValue = {
    city: '',
}

function Trip (props){
const [city , setCity] = useState(initiailFormValue)



  


    const handleChange = e => {
        setCity({...city , [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        props.fetchTripData(city)
    }

    console.log(props)
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                type='text'
                name='city'
                value={city.city}
                placeholder='Choose a new Location'
                onChange={handleChange}
                />
                <button>New Adventure</button>
            </form>
            <>
            {props.location.map( e => 
            <div>
                <h1> Explore {e.result_object.name}</h1>
                <img  src={e.result_object.photo.images.large.url}/>
                <p> About {e.result_object.name} </p>
                <p>{e.result_object.geo_description}</p>
            </div>   
            )}
             <h2> Activities you can't miss</h2>
            {props.activities.map(e => 
                <div>
                    <ol>
                    <ul>{e.result_object.name}</ul>
                    </ol>
                </div>
            )}
                <h2>Thigns to Do</h2>
            {props.thingsToDO.map(e => 
                <div>
                    <ol>
                        <ul>
                            {e.result_object.name}
                        </ul>
                    </ol>
                </div>
            )}

            <h2> Places to stay</h2>
            {props.lodging.map( e => 
                <div>
                    <ol>
                        <ul>
                            {e.result_object.name}
                        </ul>
                    </ol>
                </div>
                )}
            </>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        thingsToDO: state.thingsToDO,
        lodging: state.lodging,
        activities: state.activities,
        airports: state.airports, 
        location: state.location
    }
}

export default connect(mapStateToProps,{fetchTripData})(Trip);