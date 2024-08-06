import React, { useEffect, useState } from 'react'
import './body.css'
import RestaurantCard from './RestaurantCard'

const Body = () => {
    const[listOfRestaurants,setListOfRestaurants] =useState([]);

    const filterCardsRated=()=>{
        setListOfRestaurants(listOfRestaurants.filter((res)=>(
            res.info.avgRating > 4.3
        )))
       
    }

    useEffect(()=>{
        fetchData()
    },[]);

    const fetchData= async ()=>{
        const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();
        
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    return (
        <div className="body">
            <div className="search">
                <button className="filterBtn" onClick={()=> filterCardsRated()} >Top rated Restaurants</button>
                
            </div>
            <div className="resContainer">
                {
                    listOfRestaurants.map((restaurant)=>(
                        <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                    ))
                }
               
            </div>
        </div>
    )
}

export default Body
