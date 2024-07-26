const RestaurantCard = (props) => {
  return (
    <div className="res-card">
      <img
        className="res-dish"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/TopPicks2024/3387952A.png"
      />
      <h3>{props.resName}</h3>
      <h4>{props.cuisine}</h4>
      <h4>4.4 stars</h4>
      <h4>35 mins</h4>
    </div>
  );
};

export default RestaurantCard;
