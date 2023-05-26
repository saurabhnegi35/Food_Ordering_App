import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "./constants";

const Body = () => {
  let [searchText, setSearchText] = useState("KFC");

  return (
    <>
      <div className="restaurant-list">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            console.log(searchText);
          }}
        />

        <button className="search-btn">Search</button>
      </div>
      <div className="restaurant-list">
        {restaurantList.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
