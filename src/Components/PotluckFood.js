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
import axiosWithAuth from "../axiosWithAuth";

const initialFoodList = [];

function PotluckFood(props) {
  const username = localStorage.getItem("username");
  const [foodData, setFoodData] = useState(initialFoodList);
  const handleCancel = (foodItem, i) => {
    axiosWithAuth()
      .put(`/api/potlucks/2/${foodItem.food_id}/cancel`)
      .then((res) => {
        console.log("put request succeeded");
        const toCancelData = [...foodData];
        toCancelData[i].username = null;
        setFoodData(toCancelData);
      })
      .catch((err) => {
        console.log("failing put request", err);
      });
  };

  useEffect(() => {
    axiosWithAuth()
      .get("/api/potlucks/2")
      .then(
        (res) => {
          console.log("axios call with index", res.data);
          setFoodData(res.data.food);
        },
        (err) => {
          console.log("axios call with index fail", err);
        }
      );
  }, []);

  const handleAssign = (foodItem, i) => {
    axiosWithAuth()
      .put(`/api/potlucks/2/${foodItem.food_id}/assign`)
      .then((res) => {
        console.log("put request succeeded");
        const newData = [...foodData];
        newData[i].username = localStorage.getItem("username");
        setFoodData(newData);
      })
      .catch((err) => {
        console.log("failing put request", err);
      });
  };
  return (
    <div>
      <ul>
        {foodData.map((foodItem, i) => {
          return (
            <li key={i}>
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
