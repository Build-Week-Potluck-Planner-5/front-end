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

function PotluckFood(props) {
  const [baseData, setBaseData] = useState([
    {
      food_name: "tomatoes",
      food_owner: "Jordan",
    },
    {
      food_name: "pickles",
      food_owner: "Josh",
    },
    {
      food_name: "bread",
      food_owner: null,
    },
  ]);

  const [foodData, setFoodData] = useState(initialFoodList);
  const handleCancel = (foodItem, i) => {
    const toCancelData = [...baseData];
    toCancelData[i].food_owner = null;
    setBaseData(toCancelData);
  };

  const handleAssign = (foodItem, i) => {
    const newData = [...baseData];
    newData[i].food_owner = localStorage.getItem("username");
    setBaseData(newData);
  };
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
        {baseData.map((foodItem, i) => {
          return (
            <li>
              {foodItem.food_name}{" "}
              <button
                disabled={foodItem.food_owner}
                onClick={() => {
                  handleAssign(foodItem, i);
                }}
              >
                Bring Food
              </button>
              <button
                onClick={() => {
                  handleCancel(foodItem, i);
                }}
              >
                X
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default PotluckFood;
