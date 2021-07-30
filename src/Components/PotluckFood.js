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
// import axios from "axios";
import axiosWithAuth from "../axiosWithAuth";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";

const StyledFoodList = styled.div`
  .listItem {
    display: flex;
    justify-content: space-evenly;
    border: 2.5px solid #7172f7;
    margin-top: 2%;
    padding: 2%;
    border-radius: 8px;
  }
  .list {
    list-style-type: none;
    padding-left: 10%;
    padding-right: 10%;
  }
  .color1 {
    background-color: #7172f7;
    padding: 1rem 5rem 2rem 2.5rem;
    border: 1px solid #dadada;
    border-top: none;
  }
  .button {
    border-radius: 8px;
  }
  .cancelButton {
    border-radius: 8px;
  }
  .buttonHover:hover {
    box-shadow: 0 5px 8px 0 rgba(185, 113, 247, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }
  .titleDiv {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
`;

const initialFoodList = [];

function PotluckFood(props) {
  const { potluck_id } = useParams();
  const username = localStorage.getItem("username");
  const [foodData, setFoodData] = useState(initialFoodList);
  const handleCancel = (foodItem, i) => {
    axiosWithAuth()
      .put(`/api/potlucks/${potluck_id}/${foodItem.food_id}/cancel`)
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
      .get(`/api/potlucks/${potluck_id}`)
      .then(
        (res) => {
          console.log("axios call with index", res.data);
          setFoodData(res.data.food);
        },
        (err) => {
          console.log("axios call with index fail", err);
        }
      );
  }, []); //eslint-disable-line

  const handleAssign = (foodItem, i) => {
    axiosWithAuth()
      .put(`/api/potlucks/${potluck_id}/${foodItem.food_id}/assign`)
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
    <StyledFoodList>
      <div className="color1 titleDiv">
        <h1>Choose a food to bring...</h1>
        <div>
          <Link to="/mypotlucks">
            <button className="button buttonHover">My Potlucks</button>
          </Link>
        </div>
      </div>
      <ul className="list">
        {foodData.map((foodItem, i) => {
          return (
            <li key={i} className="listItem">
              {foodItem.food_name}{" "}
              <button
                className="button buttonHover"
                disabled={foodItem.username}
                onClick={() => {
                  handleAssign(foodItem, i);
                }}
              >
                Bring Food
              </button>
              {username === foodItem.username ? (
                <button
                  className="cancelButton buttonHover"
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
      <div className="color1"></div>
    </StyledFoodList>
  );
}

export default PotluckFood;
