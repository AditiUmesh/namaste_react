import { FOODITEMSURL } from "../../utils/constant";

const RestaurantCard = (props) => {
  const { restroData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    restroData.info;

  return (
    <div className="m-4 w-56 h-[320] transition ease-in-out delay-0 hover:translate-y-1 duration-300">
      <img
        className="rounded-xl"
        src={`${FOODITEMSURL}/${cloudinaryImageId}`}
        alt="food-image"
      ></img>
      <div className="restroDetails">
        <div className="text-lg py-2 mt-1 text-[#282C3F] font-semibold">
          {name}
        </div>
        <div className=" text-sm mt-1 text-[#686b78]">
          {cuisines.join(", ")}
        </div>
      </div>
      <div className="my-2 py-2 flex justify-between items-center">
        <span
          className={
            avgRating >= 4
              ? "text-sm text-white bg-green-700 px-1"
              : "text-sm text-white bg-red-800 px-1"
          }
        >
          <i className="fa fa-star"></i>
          {avgRating}
        </span>
        <div className="text-sm text-[#535665]">{sla.deliveryTime} mins</div>
        <div className="text-sm text-[#535665]">{costForTwo}</div>
      </div>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    console.log("promoted");
    return (
      <div>
        <label className="absolute bg-slate-900 text-white mx-3 my-1 p-1 rounded-sm">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
