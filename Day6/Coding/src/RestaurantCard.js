import { FOODITEMSURL } from "../utils/constant";

const RestaurantCard = (props) => {
  const { restroData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwoString,
    deliveryTime,
  } = restroData.data;
  return (
    <div className="restro-card">
      <img src={`${FOODITEMSURL}/${cloudinaryImageId}`} alt="food-image"></img>
      <h3>{name}</h3>
      <p>{cuisines.join(", ")}</p>
      <h5>{avgRating}</h5>
      <h5>{costForTwoString}</h5>
      <h5>{deliveryTime}</h5>
    </div>
  );
};

export default RestaurantCard;
