import { useState, useEffect } from "react";
import "./RestaurantMenu.css";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENUAPI } from "../../utils/constant";
const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  //   console.log(resId.resId);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const API = MENUAPI + resId;
    console.log(API);
    const data = await fetch(MENUAPI + resId);

    const json = await data.json();
    setResInfo(json.data);
    // console.log(json.data);
    // console.log(resInfo);
  };
  //   console.log(resInfo);
  //   console.log();

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, locality, avgRating, totalRatingsString } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  console.log(itemCards);

  return (
    <div>
      <div className="restro-desc">
        <div className="restro-heading">
          <p className="name">{name}</p>
          <p className="cuisine">{cuisines?.join(",")}</p>
          <p className="locality">{locality}</p>
        </div>
        <div>
          <div className="avgrating">{avgRating}</div>
          <div className="totalrating">{totalRatingsString}</div>
        </div>
      </div>
      <div>
        <ul>
          {itemCards.map((items) => (
            <li key={items.card.info.id}>
              {items.card.info.name} - Rs.{items.card.info.price / 100}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
