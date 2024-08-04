import React from 'react'
import './body.css'
import RestaurantCard from './RestaurantCard'
import API_Data from '../utils/api'

const Body = () => {

    const filterCards=()=>{
        console.log("Filtered");
    }

    return (
        <div className="body">
            <div className="search">
                <button className="filterBtn" onClick={filterCards} >Top rated Restaurants</button>
            </div>
            <div className="resContainer">
                {
                    API_Data.map((restaurant)=>(
                        <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                    ))
                }
               
            </div>
        </div>
    )
}

export default Body
