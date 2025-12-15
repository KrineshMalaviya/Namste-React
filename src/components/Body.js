import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utills/mockdata";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurant, setlistOfRestaurant] = useState(resList);
  const [filterRestaurant, setFilterRestaurant] = useState(resList);
  const [searchText, setSearchText] = useState("");

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // async function fetchData() {
  //   const data = await fetch(
  //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.624480699999999&page_type=DESKTOP_WEB_LISTING"
  //   );
  //   const jsondata = await data.json();
  //   console.log(jsondata);

  //   // setlistOfRestaurants(jsondata.data.cards[2].data.data.cards);
  //   setlistOfRestaurant(jsondata?.data?.cards[2]?.data?.data?.cards);
  //   setFilterRestaurant(jsondata?.data?.cards[2]?.data?.data?.cards);
  // }

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
                res.data.name.toLowerCase().includes(searchText.toLowerCase())
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
              (res) => res.data.avgRating > 4
            );
            setlistOfRestaurant(filterdata);
          }}
        >
          Most Rated Button
        </button>
      </div>
      <div className="res-container">
        {filterRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
