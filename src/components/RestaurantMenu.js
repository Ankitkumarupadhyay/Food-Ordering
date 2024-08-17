// import { useState, useEffect } from "react"
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Accordian from "./Accordian";
import { useState } from "react";
// import Error from './Error'

const RestaurantMenu = () => {
    // const[showItems,setShowItems]= useState(false)
    const[showIndex,setShowIndex]=useState(null)
    
    const { resId } = useParams();

const resInfo = useRestaurantMenu(resId);

    if (resInfo === null) {
        return <Shimmer />
    }

    const { name, id, city, cuisines, avgRating, costForTwoMessage,totalRatingsString } = resInfo?.cards[2]?.card?.card?.info;
// console.log(ratingCount);

    const category = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((e)=>{
        return e?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    });
// console.log(category);

    return <>
        <div className="resAllInfo  py-3 px-[280px] border-2 border-solid border-black "  >
            <div className="resInfo mt-32 p-5 gap-2 border-2 border-solid border-black rounded-xl">
                <h1 className="font-bold text-2xl  ">{name}  </h1>
                {/* <h2 className="inline font-semibold text-xl ml-5 ">{id} </h2> */}
                <h3 className="font-semibold text-lg inline">⭐{avgRating} rating </h3>
                <h3 className="font-semibold text-lg inline">({totalRatingsString} ) </h3>
                <h3 className="font-medium text-base">{cuisines.join(", ")}</h3>
                <h3>{city}</h3>
                <h3>{costForTwoMessage}</h3>
                <h3>{id}</h3>
            </div>
            <div className="accordians ">
                {
                    category.map((c ,index)=>(
                        <Accordian data={c?.card?.card} key={c?.card?.card?.title} showItems={index ===showIndex ? true :false} setind={()=>showIndex===index? setShowIndex(null) : setShowIndex(index)} />
                    ))
                }
            </div>
           
        </div>
    </>
}

export default RestaurantMenu

// const {menuItems}= resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards


 // const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card  ;
        // console.log(recommended);