import { useState, useEffect } from "react"
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);
    const { resId } = useParams();

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=" + resId);

        const json = await data.json();

        setResInfo(json?.data)
    }

    if (resInfo === null) {
        return <Shimmer />
    }


    const { name, id, city, cuisines, avgRating, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;


    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;




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
                <ul style={{ padding: " 10px " }}  >

                    {
                        itemCards.map((i) => (
                            <li key={i.card.info.id}> {i.card.info.id}-- {i.card.info.name} --  Rs.{i.card.info.finalPrice / 100} </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    </>
}

export default RestaurantMenu

// const {menuItems}= resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards