import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "./constants";

const Body = () => {
  
  return (
    <>
      <div className="restaurant-list">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          
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
