import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utills/constants";
import Shimmer from "./Shimmer";
import { resMenu } from "../utills/mockdata";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();
  console.log(resId);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    console.log(json);
    setResInfo(data.json);
  };

  console.log(
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card
  );

  if (resInfo === null) return <Shimmer />;

  const { name, costForTwoMessage } = resInfo?.data?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;

  console.log("AA--->", itemCards);
  return (
    <div>
      <h1>{name}</h1>
      <h2>{costForTwoMessage}</h2>
      {itemCards.map((item) => {
        return (
          <div>
            <p>
              {item.card.info.name}- ₹
              {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </p>
          </div>
        );
      })}
    </div>
  );
};
export default RestaurantMenu;
