import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResMenu from "../../utils/useResMenu";

import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(0);
  // console.log(resId);
  const resInfo = useResMenu(resId);

  // console.log(resInfo);
  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, locality, avgRating, totalRatingsString } =
    resInfo?.cards[0]?.card?.card?.info;

  const restroCategory =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(restroCategory);

  return (
    <div className="mx-[270px] my-[25px] pt-2">
      <div className="flex flex-wrap justify-between justify-items-center mx-5 mb-5 pb-4 border-b-[1px] border-dashed border-[#7e808c]">
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
      <div>
        {restroCategory.map((category, index) => (
          <RestaurantCategory
            data={category}
            key={category.card.card.title}
            items={index === showIndex ? true : false}
            setShowIndex={() => {
              if (index !== showIndex) {
                setShowIndex(index);
              } else {
                setShowIndex("");
              }
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
