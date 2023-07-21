import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResMenu from "../../utils/useResMenu";
import { FOOD_IMAGE } from "../../utils/constant";

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

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  //     return (resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card)

  console.log(itemCards);

  return (
    <div className="mx-[270px] my-[25px] pt-2">
      <div className="flex flex-wrap justify-between justify-items-center mx-5 pb-4 border-b-[1px] border-dashed border-[#7e808c]">
        <div className="restro-heading">
          <div className="inline-block mr-4 w-[600px]">
            <p className="font-serif font-semibold text-3xl text-[#282828] capitalize mb-2">
              {name}
            </p>
            <p className="mb-1 overflow-hidden text-[.93rem] text-[#7e808c] text-ellipsis whitespace-nowrap">
              {cuisines?.join(",")}
            </p>
            <p className="h-4 text-[#7e808c] mb-2">{locality}</p>
          </div>
        </div>
        <div className="border-solid border-[1px] border-[#e9e9eb] rounded-md text-center p-2 float-right max-[100px] shadow shadow-[#f9f9f9]">
          <div className="text-[#3d9b6d] pb-[10px] border-b-[1px] border-solid boder-[#e9e9eb] font-bold mb-2 block">
            <i className="fa fa-star"></i>
            {avgRating}
          </div>
          <div className="text-[11px] text-[#8b8d97]">{totalRatingsString}</div>
        </div>
      </div>
      <div className="m-5">
        <div className="font-bold text-lg">Recommended</div>
        <div>
          {itemCards?.map((items) => (
            <div
              className="mt-5 pb-4 flex justify-between justify-items-center border-b-[1px] order-solid border-[#7e808c]"
              key={items.card.info.id}
            >
              <div className="pt-2">
                <div className="mr-2 text-[17px] font-bold text-[#3e4152] break-words">
                  {items.card.info.name}{" "}
                </div>
                <div className="font-normal text-[#3e4152] text-xs pt-[3px] pb-2">
                  <span className="text-[12px] mr-[0.1rem]">
                    <i className="fa fa-inr"></i>
                    {items.card.info.price / 100 ||
                      items.card.info.defaultPrice / 100}
                  </span>
                </div>
                <div className="text-[12px] text-[#7e808c] pb-[2px]">
                  {items.card.info.description}
                </div>
              </div>
              <div className="restro-menu-image">
                <button className="w-[118px] h-[96px] object-cover rounded-md">
                  <img
                    className="w-[118px] h-[96px] object-cover rounded-md"
                    src={`${FOOD_IMAGE}${items.card.info.imageId}`}
                    alt="food-image"
                  ></img>
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
