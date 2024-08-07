import React, { useEffect, useState } from 'react';
import '../CSS/body.css';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    const filterCardsRated = () => {
        setFilteredRestaurants(listOfRestaurants.filter((res) => (
            res.info.avgRating > 4.3
        )))

    }

    useEffect(() => {
        fetchData()
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();

        setListOfRestaurants( json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants )
        setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants )
    }



    return listOfRestaurants.length === 0 ? (<Shimmer />) : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text"
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value)
                        }}
                        placeholder='Find your favourite' />
                    <button onClick={() => {
                        setFilteredRestaurants(listOfRestaurants.filter((res) => (
                            res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        )))
                    }} >Submit</button>
                </div>
                <button className="filterBtn" onClick={() => filterCardsRated()} >Top rated Restaurants</button>

            </div>
            <div className="resContainer">
                {
                    filteredRestaurants.map((restaurant) => (
                       <Link to={"/restaurant/"+ restaurant.info.id} key={restaurant.info.id}> <RestaurantCard  resData={restaurant} /></Link> 
                    ))
                }

            </div>
        </div>
    )
}

export default Body
// setListOfRestaurants(listOfRestaurants.filter((res)=>(
//     res.info.name.toLowerCase().includes(searchText.toLowerCase())
// )))