import { useState, useEffect } from "react";
import { MENUAPI } from "./constant";

const useResMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const API = MENUAPI + resId;
    console.log(API);
    const data = await fetch(MENUAPI + resId);
    const json = await data.json();
    setResInfo(json.data);
  };
  return resInfo;
};

export default useResMenu;
