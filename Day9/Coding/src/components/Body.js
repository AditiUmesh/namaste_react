import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { FOODAPPURL } from "../../utils/constant";
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
    const data = await fetch(FOODAPPURL);
    const json = await data.json();
    setListOfRestro(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestro(json?.data?.cards[2]?.data?.data?.cards);
  };

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
    <div className="body">
      <div className="sort">
        <div className="searchBar">
          <input
            type="text"
            placeholder="Seach items.."
            name="search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              console.log(searchText);
            }}
          ></input>
          <button type="submit" onClick={handleSearchRestro}>
            <i className="fa fa-search"></i>
          </button>
        </div>
        <div className="filter">
          <button
            className="filter-btn"
            onClick={() => {
              console.log("button clicked");
              filteredList = listOfRestro.filter(
                (listOfRestro) => listOfRestro.data.avgRating > 4
              );
              console.log(filteredList);
              setFilteredRestro(filteredList);
            }}
          >
            Top Rated
          </button>
        </div>
      </div>
      <div className="restro-container">
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
