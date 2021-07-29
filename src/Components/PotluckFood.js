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

const initialFoodList = [
  {
    food_name: "tomatoes",
    username: null,
  },
  {
    food_name: "pickles",
    username: "Josh",
  },
  {
    food_name: "bread",
    username: null,
  },
];

function PotluckFood(props) {
  // const [baseData, setBaseData] = useState([
  //   {
  //     food_name: "tomatoes",
  //     food_owner: "Jordan",
  //   },
  //   {
  //     food_name: "pickles",
  //     food_owner: "Josh",
  //   },
  //   {
  //     food_name: "bread",
  //     food_owner: null,
  //   },
  // ]);
  const username = localStorage.getItem("username");
  const [foodData, setFoodData] = useState(initialFoodList);
  const handleCancel = (foodItem, i) => {
    const toCancelData = [...foodData];
    toCancelData[i].username = null;
    setFoodData(toCancelData);
  };
  useEffect(() => {
    axios
      .get("https://potluck-back-end.herokuapp.com/api/potlucks", {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log("/potluck axios call", res.data);
      })
      .catch((err) => {
        console.log("after first api call", err);
      });
  });
  useEffect(() => {
    axios
      .get("https://potluck-back-end.herokuapp.com/api/potlucks/0", {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      })
      .then(
        (res) => {
          console.log("axios call with index", res.data);
          // setFoodData(res.data.food);
        },
        (err) => {
          console.log("axios call with index fail", err);
        }
      );
  }, []);

  const handleAssign = (foodItem, i) => {
    const newData = [...foodData];
    newData[i].username = localStorage.getItem("username");
    setFoodData(newData);
    axios.post();
  };

  return (
    <div>
      <ul>
        {foodData.map((foodItem, i) => {
          return (
            <li>
              {foodItem.food_name}{" "}
              <button
                disabled={foodItem.username}
                onClick={() => {
                  handleAssign(foodItem, i);
                }}
              >
                Bring Food
              </button>
              {username === foodItem.username ? (
                <button
                  onClick={() => {
                    handleCancel(foodItem, i);
                  }}
                >
                  X
                </button>
              ) : (
                <></>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default PotluckFood;
