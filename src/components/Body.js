import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "./constants";

function filterData(searchText, restaurants) {
  //   console.log(searchText, restaurants);
    const filterData = restaurants.filter((restaurant) =>
      restaurant.data.name.includes(searchText)
    );
    console.log(filterData);
    return filterData;
}

const Body = () => {
  const [restaurants, setRestaurants] = useState(restaurantList);
  const [searchText, setSearchText] = useState("");
//   console.log(restaurants);

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            // console.log(searchText);
          }}
        />

        <button
          className="search-btn"
          onClick={() => {
            // console.log(restaurants);
            const data = filterData(searchText, restaurants);
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
