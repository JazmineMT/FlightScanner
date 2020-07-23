import React from 'react'


function Home (props) {
    const routeToTripPage = e => {
        e.preventDefault()
        props.history.push('/trip')
    }

    return (
        <div>
            <h1>Plan your Next Trip!</h1>
            <button onClick={routeToTripPage}>Where to ?</button>
        </div>
    )
}

export default Home;