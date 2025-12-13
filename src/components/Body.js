import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utills/mockdata";

const Body = () => {
  const [listOfRestaurant, setlistOfRestaurant] = useState(resList);
  return (
    <div className="body">
      <div className="filter-btn">
        <button
          onClick={() => {
            let filterdata = listOfRestaurant.filter(
              (res) => res.data.avgRating > 4
            );
            setlistOfRestaurant(filterdata);
          }}
        >
          Filter
        </button>
      </div>
      <div className="res-container">
        {/* <RestaurantCard resData={resList[0]} />
        <RestaurantCard resData={resList[1]} /> */}
        {listOfRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
