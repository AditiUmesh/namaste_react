import { useState } from "react";

import ItemCards from "./ItemCards";

const RestaurantCategory = (props) => {
  const { title, itemCards } = props?.itemInfo?.card?.card;
  console.log(props.itemInfo.card.card);

  const [items, setItems] = useState(false);

  const handleItems = () => {
    console.log("clicked");
    setItems(!items);
  };
  return (
    <div className="m-5">
      <div
        className="flex justify-between pr-4 cursor-pointer"
        onClick={handleItems}
      >
        <div className="font-bold text-lg">{title}</div>
        <i className="fa fa-chevron-down"></i>
      </div>

      <div>{items && <ItemCards itemCards={itemCards} />}</div>
    </div>
  );
};
export default RestaurantCategory;
