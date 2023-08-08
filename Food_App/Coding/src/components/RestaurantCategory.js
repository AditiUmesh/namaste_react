import ItemCards from "./ItemCards";

const RestaurantCategory = ({ data, items, setShowIndex }) => {
  const handleItems = () => {
    setShowIndex();
  };

  return (
    <div className="m-5">
      <div
        className="flex justify-between pr-4 cursor-pointer my-3"
        onClick={handleItems}
      >
        <div className="font-bold text-lg">
          {data?.card?.card.title} ({data?.card?.card?.itemCards.length})
        </div>
        {items ? (
          <i className="fa fa-chevron-up"></i>
        ) : (
          <i className="fa fa-chevron-down"></i>
        )}
      </div>

      <div>
        {items && <ItemCards itemCards={data?.card?.card?.itemCards} />}
      </div>
      {items ? <></> : <div className="border-b-[15px] border-gray-200"></div>}
    </div>
  );
};
export default RestaurantCategory;
