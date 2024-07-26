import RestaurantCard from "./RestaurantCard";

const Body = () => {
  return (
    <div className="body">
      <div className="searchBar">Search Bar</div>
      <div className="res-container">
        <RestaurantCard resName="Call Me Chow" cuisine="Indian"/>
        <RestaurantCard resName="Good Will" cuisine="Indian,Chinese"/>
        <RestaurantCard resName="Call Me Chow" cuisine="Indian"/>
      </div>
    </div>
  );
};

export default Body;
