import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utills/constants";
import useRestaurantMenu from "../utills/useRestaurantMenu";

const RestaurantMenu = () => {

  const { resId } = useParams();
  const resMenu = useRestaurantMenu(resId);

  if (resMenu === null) return <Shimmer />;

  const { name, costForTwoMessage, city, cuisines, avgRating } =
    resMenu.cards[2].card.card.info;

  const { menuItems } =
    resMenu.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
      .itemCards;
  console.log(name);

  return (
    <div>
      <h1>{name}</h1>
      <h2>{avgRating}</h2>
      <ul>
        {cuisines.map((item) => {
          <li>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
