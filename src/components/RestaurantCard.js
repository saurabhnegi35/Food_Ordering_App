import { IMG_CDN_URL } from "./constants";

//Optional Chaining
const RestaurantCard = ({
  name,
  address,
  avgRating,
  cuisines,
  deliveryTime,
  cloudinaryImageId,
  lastMileTravelString,
}) => {
  // const { name, cuisines, cloudinaryImageId, lastMileTravelString } =
  // restaurant.data;
  // console.log(props.restaurant?.data?.cloudinaryImageId);
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{lastMileTravelString}</h4>
      {/* <h4>{address}</h4> */}
      {/* <h4>{avgRating} 🌟</h4>
      <h4>{deliveryTime} Minutes</h4> */}
    </div>
  );
};

export default RestaurantCard;
