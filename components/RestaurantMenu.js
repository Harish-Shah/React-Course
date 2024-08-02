import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utills/constants";

const RestaurantMenu = () => {
  const [resMenu, setResMenu] = useState(null);

    const {resId} = useParams();

  useEffect(() => {
    fetchResMenu();
  }, []);

  const fetchResMenu = async () => {
    const data = await fetch(
      MENU_API + resId + "&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    setResMenu(json.data);
    console.log(json);
  };

  if (resMenu === null) return <Shimmer />;

  const { name, costForTwoMessage, city, cuisines, avgRating } =
    resMenu.cards[2].card.card.info;

  const { menuItems } = resMenu.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards;
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
