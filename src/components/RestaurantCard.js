import { IMG_CDN_URL } from "./constants";

//Optional Chaining
const RestaurantCard = ({
  name,
  area,
  avgRating,
  cuisines,
  costForTwoString,
  cloudinaryImageId,
  lastMileTravelString,
}) => {
  // const { name, cuisines, cloudinaryImageId, lastMileTravelString } =
  // restaurant.data;
  // console.log(props.restaurant?.data?.cloudinaryImageId);
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{area}</h5>
      <span>
        <h4
          style={
            avgRating < 4
              ? { backgroundColor: "var(--orange)" }
              : avgRating === "--"
              ? { backgroundColor: "white", color: "black" }
              : { color: "white" }
          }
        >
          <i className="fa-solid fa-star"></i>
          {avgRating}
        </h4>
        <h4>•</h4>
        <h4>{lastMileTravelString}</h4>
        <h4>•</h4>
        <h4>{costForTwoString}</h4>
      </span>
    </div>
  );
};

export default RestaurantCard;
