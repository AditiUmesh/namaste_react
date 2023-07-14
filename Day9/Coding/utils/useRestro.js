import { useEffect, useState } from "react";
import { FOODAPPURL } from "./constant";

const useRestro = () => {
  const [listOfRestro, setListOfRestro] = useState([]);
  const [filteredRestro, setFilteredRestro] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(FOODAPPURL);
    const json = await data.json();
    setListOfRestro(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestro(json?.data?.cards[2]?.data?.data?.cards);
  };
  console.log(listOfRestro);
  return [listOfRestro, filteredRestro];
};

export default useRestro;
