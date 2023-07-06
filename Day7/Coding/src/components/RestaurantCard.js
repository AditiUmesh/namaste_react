import { FOODITEMSURL } from "../../utils/constant";

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
      <div className="restroDetails">
        <div className="rname">{name}</div>
        <div className="cuisines">{cuisines.join(", ")}</div>
      </div>
      <div className="description">
        <span className={avgRating >= 4 ? "greenstar" : "redstar"}>
          <i className="fa fa-star"></i>
          {avgRating}
        </span>
        <div className="desc">{costForTwoString}</div>
        <div className="desc">{deliveryTime} mins</div>
      </div>
    </div>
  );
};

export default RestaurantCard;
