import RestaurantCard from "./RestaurantCard";
import { restrautList } from "../../utills/constants";
import { useState, useEffect } from "react";
import Shimmer from "../Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [resList, setResList] = useState(restrautList);
  const [filteredResList, setFilteredResList] = useState(restrautList);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    // fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9615398&lng=79.2961468&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const jsonData = await data.json();
    //TODO : update the data and state as per the API json
    console.log("jsonData", jsonData.data.cards);
    setResList(jsonData.data.cards);
  };
  //another way of declaring state var as [resList, setResList] this is just array destructing we can also write i.e. useState
  // returns an array of 2 values i.e. var and setter funtion
  // const arr = useState(restrautList);
  // const [resList, setResList] = arr

  return resList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="searchBtn"
            onClick={() => {
              console.log(searchText);
              const filteredResList = resList.filter((restaurant) => {
                return restaurant.data.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilteredResList(filteredResList);
            }}
          >
            Search
          </button>
        </div>
      </div>
      {/* <div className="searchBar">Search Bar</div> */}
      <button
        className="filter-btn"
        onClick={() => {
          topRatedRestaurants = restrautList.filter(
            (restaurant) => restaurant.data.avgRating > 4
          );
          setFilteredResList(topRatedRestaurants);
          console.log(topRatedRestaurants);
        }}
      >
        Top Rated Restaurants
      </button>
      <div className="res-container">
        {filteredResList.map((restaurant) => {
          // console.log(restaurant)
          return (
            <Link to={"restaurant/" + restaurant.data.id}>
              <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
