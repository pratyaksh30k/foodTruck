import { IMG_CDN_URL } from "../constants";

const RestaurantCard = ({name, cuisines, avgRating, cloudinaryImageId}) => {
    // const {name, cuisines, avgRating, cloudinaryImageId} = restaurant.info;
        return (
        <div className="card">
            <img src={IMG_CDN_URL + cloudinaryImageId}/>
            <h2>{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h4>Rating {avgRating}</h4>
        </div>
    );
};
export default RestaurantCard;