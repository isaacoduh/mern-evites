import React from 'react';
import GuestForm from '../guests/GuestForm'
import GuestFilter from '../guests/GuestFilter'
import GuestSearch from '../guests/GuestSearch'
import GuestCounter from '../guests/GuestCounter'
import Guests from '../guests/Guests'

const Home = () => {
    return (
        <div className="app-container">
            <div className="main">
                <div className="filter">
                    <GuestFilter/>
                    <GuestSearch/> 
                </div>
                <GuestForm/>
                <GuestCounter />
            </div>
            <Guests />
        </div>
    )
}

export default Home