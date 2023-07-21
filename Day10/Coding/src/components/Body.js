import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { FOODAPPRL } from "../../utils/constant";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestro, setListOfRestro] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestro, setFilteredRestro] = useState([]);

  useEffect(() => {
    // console.log("useffect called");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(FOODAPPRL);
    const json = await data.json();
    setListOfRestro(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestro(json?.data?.cards[2]?.data?.data?.cards);
  };
  console.log(filteredRestro);

  // conditional rendering
  // if (listOfRestro.length === 0) {
  // return <Shimmer />;
  // }
  const handleSearchRestro = () => {
    if (searchText === "") return setFilteredRestro(listOfRestro);
    const searchRestro = listOfRestro.filter((restro) =>
      restro.data.name.toLowerCase().includes(searchText.toLowerCase())
    );
    console.log(searchRestro);
    setFilteredRestro(searchRestro);
  };

  return listOfRestro.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="mt-5">
      <div className="p-2 m-2 border-b border-solid shadow-md flex justify-between">
        <div className="flex justify-center p-4">
          <input
            className="border border-solid border-black p-2 w-72"
            type="text"
            placeholder="Search Restaurants here.."
            name="search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              console.log(searchText);
            }}
          ></input>
          <button
            className="p-2 border bg-green-100 border-solid"
            type="submit"
            onClick={handleSearchRestro}
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
                (listOfRestro) => listOfRestro.data.avgRating > 4
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
                (listOfRestro) => listOfRestro.data.veg === true
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
                (listOfRestro) => listOfRestro.data.veg === false
              );
              console.log(filteredList);
              setFilteredRestro(filteredList);
            }}
          >
            Non-Veg
          </button>
          <button
            className="py-2 px-3 m-2 border border-solid border-{#c7c8cf} rounded-full"
            onClick={() => {
              console.log("button clicked");
              filteredList = listOfRestro.filter(
                (listOfRestro) => listOfRestro.data.deliveryTime < 30
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
          <Link to={"/restaurant/" + restro.data.id} key={restro.data.id}>
            <RestaurantCard restroData={restro} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
