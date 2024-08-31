import React, { useEffect, useState } from 'react';
import '../CSS/body.css';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import Categories from './Categories';


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
        const data = await fetch("https://proxy.cors.sh/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",{
            headers: {
            'x-cors-api-key': 'temp_30ab0b2006237d8f81f9982b7db77f63'
            }
          });

        const json = await data.json();

        const restro = json?.data?.cards.filter(item => item.card?.card?.gridElements?.infoWithStyle?.restaurants)[0]
        // console.log(restro)

        setListOfRestaurants(restro?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurants(restro?.card?.card?.gridElements?.infoWithStyle?.restaurants)

        // setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        // setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        
    }


   



    return  listOfRestaurants.length === 0 ? (<Shimmer />) : (
        
        <div className="body w-[100%] ">
            <Categories />
            <div className="filter  gap-5 flex">
                <div className="search bg-white flex border-2 border-solid border-[#FECB0F] rounded-xl">
                    <input className=' border-0 outline-none py-1 px-3 rounded-xl' type="text"
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value)
                        }}
                        placeholder='Find your favourite' />
                    <button className='bg-[#FECB0F] rounded-lg  cursor-pointer font-medium' onClick={() => {
                        setFilteredRestaurants(listOfRestaurants.filter((res) => (
                            res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        )))
                    }} >Submit</button>
                </div>
                <button className="filterBtn  bg-[#FECB0F] lg:{py-2 px-3}  rounded-xl" onClick={() => filterCardsRated()} >Top rated Restaurants</button>

            </div>
            <div className="resContainer  flex flex-wrap items-center justify-center">
                {
                    filteredRestaurants.map((restaurant) => (
                        <Link to={"/restaurant/" + restaurant.info.id} key={restaurant.info.id}> <RestaurantCard resData={restaurant} /></Link>
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