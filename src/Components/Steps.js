import React from "react";
import "./steps.css";
export default function Steps() {
  return (
    <>
      <div className="step">
        <img src={require("../images/choose_meal.webp")} alt="" />
        <h2>Select Your Meals</h2>
      </div>
      <div className="step">
        <img src={require("../images/Deliciously_Delivered.webp")} alt="" />
        <h2> Cooked & Delivered Fresh</h2>
      </div>
      <div className="step">
        <img src={require("../images/how_it_works_food_plate.webp")} alt="" />
        <h2> Heat, Eat, Bon Appétit!</h2>
      </div>
    </>
  );
}
