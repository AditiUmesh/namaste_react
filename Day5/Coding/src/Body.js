import RestaurantCard from "./RestaurantCard";
import { restroList } from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listOfRestro, setListOfRestro] = useState(restroList);
  return (
    <div className="body">
      <div className="searchBar">
        <input type="text" placeholder="Seach items.." name="search"></input>
        <button type="submit">
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
            setListOfRestro(filteredList);
          }}
        >
          Top Rated
        </button>
      </div>
      <div className="restro-container">
        {listOfRestro.map((restro) => (
          <RestaurantCard key={restro.data.id} restroData={restro} />
        ))}
      </div>
    </div>
  );
};

export default Body;
