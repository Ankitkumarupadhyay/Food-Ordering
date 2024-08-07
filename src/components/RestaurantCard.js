import React from "react";
import '../CSS/restaurantCard.css'


const RestaurantCard = (props) => {

    const {resData} =props;
    const{
        name, 
        cuisines,  
        avgRating,
        cloudinaryImageId,
        sla,
        costForTwo
    } = resData?.info;

    


    return <div className="resCard">
        <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} alt="img" />
        <h2>{name} </h2>
        <h4>{cuisines.join(", ")} </h4>
        <h4>{avgRating} star</h4>
        <h4>{sla.deliveryTime} minutes</h4>
        <h4>{costForTwo} </h4>

    </div>
}

export default RestaurantCard;