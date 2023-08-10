import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { FOODAPPRL } from "../../utils/constant";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestro, setListOfRestro] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestro, setFilteredRestro] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  // const PromotedRestaurantCard = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    // console.log("useffect called");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(FOODAPPRL);
    const json = await data.json();
    console.log(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setListOfRestro(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestro(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  // console.log(listOfRestro);
  // console.log(filteredRestro);

  // conditional rendering
  // if (listOfRestro.length === 0) {
  // return <Shimmer />;
  // }
  const handleSearchRestro = (searchText) => {
    if (searchText === "") return setFilteredRestro(listOfRestro);
    const searchRestro = listOfRestro.filter((restro) =>
      restro.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    console.log(searchRestro);
    setFilteredRestro(searchRestro);
    if (searchRestro?.length === 0) {
      setErrorMessage(
        `Sorry, we couldn't find any results for "${searchText}"`
      );
    }
  };

  return listOfRestro.length === 0 ? (
    <Shimmer />
  ) : (
    // {errorMessage && <div className="text-center">{errorMessage}</div>}
    <div className="mt-5">
      <div className="p-2 mt-2 mx-32 flex justify-between">
        <div className="flex justify-center p-4">
          <input
            className="border border-solid border-gray-400 p-2 w-72"
            type="text"
            placeholder="Search Restaurants here.."
            name="search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              handleSearchRestro(e.target.value);
              console.log(searchText);
            }}
          ></input>
          <button
            className="relative p-3 border bg-green-100 border-solid rounded"
            type="submit"
            onClick={() => {
              handleSearchRestro(searchText);
            }}
          >
            <i className="fa fa-search"></i>
          </button>
        </div>

        <div className="p-2 m-2 flex justify-end">
          <button
            className="py-2 px-3 m-2 border border-solid border-{#c7c8cf} rounded-full"
            onClick={() => {
              console.log("button clicked");
              filteredList = listOfRestro.filter(
                (listOfRestro) => listOfRestro.info.avgRating > 4
              );
              console.log(filteredList);
              setFilteredRestro(filteredList);
            }}
          >
            Ratings 4.0+
          </button>
          {/* to change the logic to  show veg only option*/}
          <button
            className="py-2 px-3 m-2 border border-solid border-{#c7c8cf} rounded-full"
            onClick={() => {
              console.log("button clicked");
              filteredList = listOfRestro.filter(
                (listOfRestro) => listOfRestro.info.veg === true
              );
              console.log(filteredList);
              setFilteredRestro(filteredList);
            }}
          >
            Pure Veg
          </button>
          {/* to change the logic to show the non-veg option */}
          <button
            className="py-2 px-3 m-2 border border-solid border-{#c7c8cf} rounded-full"
            onClick={() => {
              console.log("button clicked");
              filteredList = listOfRestro.filter(
                (listOfRestro) => listOfRestro.info.sla.deliveryTime < 30
              );
              console.log(filteredList);
              setFilteredRestro(filteredList);
            }}
          >
            Fast Delivery
          </button>
        </div>
      </div>
      <div className="mx-32 my-4 grid grid-cols-4 justify-items-center">
        {filteredRestro.map((restro) => (
          <Link to={"/restaurant/" + restro.info.id} key={restro.info.id}>
            {/* {restro.data.promoted ? (
              <PromotedRestaurantCard restroData={restro} />
            ) : (
              <RestaurantCard restroData={restro} />
            )} */}
            <RestaurantCard restroData={restro} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
