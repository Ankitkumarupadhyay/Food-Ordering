import React from "react";
// import '../CSS/restaurantCard.css'


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

    


    return <div className="resCard border-2 border-solid border-[#ccccccee] cursor-pointer rounded-xl p-1 transition-all transition- m-2 w-[270px] h-[350px] bg-[#ccccccee] hover:border-black hover:scale-95 ">
        <img className="w-full h-[50%] rounded-2xl object-cover " src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} alt="img" />
        <h2 className="my-1 font-semibold py-1 text-2xl whitespace-nowrap overflow-hidden text-ellipsis" >{name} </h2>
        <h4 className="my-1 whitespace-nowrap overflow-hidden text-ellipsis">{cuisines.join(", ")} </h4>
        <h4 className="my-1 whitespace-nowrap overflow-hidden text-ellipsis">{avgRating} star</h4>
        <h4 className="my-1 whitespace-nowrap overflow-hidden text-ellipsis">{sla.deliveryTime} minutes</h4>
        <h4 className="my-1 whitespace-nowrap overflow-hidden text-ellipsis">{costForTwo} </h4>

    </div>
}

export default RestaurantCard;