// either a modal or a separate page... up to you
// table with columns: food_item, button --> "Bring Food"
// Each food_item row is going to be an object in an array of all the food_items for that potluck
// if food_owner is null, then display button
// if food_owner is *not* null, then deactivate button
// on button submit, send post request, which claims that food_item for the logged in user
// {
//     food_name: 'tomatoes',
//     food_owner: 'Josh'
// }

import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

// function foodList(){
// return <ul></ul>
// }
// function foodListItem(){
//     return <li>{name}</li>
// }
const initialFoodList = [];
const initialDisabled = true;

function PotluckFood(props) {
  const [disable, setDisable] = useState(initialDisabled);
  const [foodData, setFoodData] = useState(initialFoodList);

  const handleAssign = () => {};
  useEffect(() => {
    axios
      .get("url")
      .then((resp) => {
        setFoodData(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div>
      <ul>
        {props.foodList.map((foodItem) => {
          return (
            <li>
              {foodItem.name}{" "}
              <button onCLick={handleAssign(foodItem)}>Bring Food</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default PotluckFood;
