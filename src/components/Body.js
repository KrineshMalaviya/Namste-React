import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import resList from "../utills/mockdata";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurant, setlistOfRestaurant] = useState([]);
  const [filterRestaurant, setFilterRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.624480699999999&page_type=DESKTOP_WEB_LISTING"
    );
    const jsondata = await data.json();
    console.log(jsondata);

    console.log(
      jsondata?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants?.info
    );

    setlistOfRestaurant(
      jsondata?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilterRestaurant(
      jsondata?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  }
  console.log(filterRestaurant);

  // if (listOfRestaurant.length === 0) {
  //   return <Shimmer />;
  // }
  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter-btn">
        <div>
          <input
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              console.log(searchText);
            }}
          />

          <button
            className="filter"
            onClick={() => {
              const filterRestaurant = listOfRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              console.log(filterRestaurant);
              setFilterRestaurant(filterRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          onClick={() => {
            let filterdata = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4.5
            );
            setlistOfRestaurant(filterdata);
          }}
        >
          Most Rated Button
        </button>
      </div>
      <div className="res-container">
        {filterRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
