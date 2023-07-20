import "./RestaurantMenu.css";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResMenu from "../../utils/useResMenu";
import { FOOD_IMAGE } from  "../../utils/constant";

const RestaurantMenu = () => {
  const { resId } = useParams();
  console.log(resId);
  const resInfo = useResMenu(resId);

  console.log(resInfo);
  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, locality, avgRating, totalRatingsString } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
//     return (resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card)

  console.log(itemCards);

  return (
    <div className="restro-menu">
      <div className="restro-desc">
        <div className="restro-heading">
          <div className="restro-name-address-wrapper">
            <p className="name">{name}</p>
            <p className="cuisine">{cuisines?.join(",")}</p>
            <p className="locality">{locality}</p>
          </div>
        </div>
        <div className="rating">
          <div className="avg-rating">
            <i className="fa fa-star"></i>
            {avgRating}
          </div>
          <div className="total-rating">{totalRatingsString}</div>
        </div>
      </div>
      <div className="menu-list">
        <div className="recommended">Recommended</div>
        <div>
          {itemCards?.map((items) => (
            <div className="restro-menu-items" key={items.card.info.id}>
              <div className="restro-menu-item-list">
              <div className="restro-item-name">{items.card.info.name} </div>
              <div className="restro-item-amount">
                <span className="rupee">
                  {items.card.info.price / 100 ||
                    items.card.info.defaultPrice / 100}
                </span>
              </div>
              <div className="restro-menu-desc">{items.card.info.description}</div>
              </div>
              <div className="restro-menu-image">
                <button className="styles_itemImage">
                <img className = "styles_itemImage" src={`${FOOD_IMAGE}${items.card.info.imageId}`} alt="food-image"></img>
              </button>
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
