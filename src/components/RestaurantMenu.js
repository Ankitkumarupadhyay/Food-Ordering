// import { useState, useEffect } from "react"
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    
    const { resId } = useParams();

const resInfo = useRestaurantMenu(resId);

    if (resInfo === null) {
        return <Shimmer />
    }

    const { name, id, city, cuisines, avgRating, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;


    const recommended = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((e)=>{
        return e?.card?.card?.title === "Recommended"})  ;
        console.log(recommended);

    const{itemCards}=recommended[0]?.card?.card ;


    return <>
        <div className="resAllInfo" style={{ padding: " 10px 100px" }} >
            <div className="resInfo">
                <h1>{name} </h1>
                <h2>{id} </h2>
                <h3>{city}</h3>
                <h3>{cuisines.join(", ")}</h3>
                <h3>{avgRating}</h3>
                <h3>{costForTwoMessage}</h3>

            </div>
            <div className="menuList" >
                <h1>Menu </h1>
                <ul  >
                   

                    {
                        itemCards.map((i) => (
                            <li key={i?.card?.info?.id}> {i?.card?.info?.id}-- {i?.card?.info?.name} --  Rs.{i?.card?.info?.finalPrice / 100} </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    </>
}

export default RestaurantMenu

// const {menuItems}= resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards