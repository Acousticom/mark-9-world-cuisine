import React, { useState } from "react";
import "./styles.css";

const cuisineDB = {
  indian: [
    { dishName: "Dal Rice 🍛", popularity: "4/5" },
    {
      dishName: "Chicken Lolipop 🍗",
      popularity: "5/5"
    }
  ],
  American: [
    { dishName: "French fries 🍟", popularity: "3/5" },
    { dishName: "Hamburger 🍔", popularity: "4/5" }
  ],
  Japanese: [
    { dishName: "Shushi 🍣", popularity: "5/5" },
    { dishName: "Rice cake 🍙", popularity: "3/5" }
  ]
};
export default function App() {
  const [selectedCuisine, setCuisine] = useState(
    "indian"
  );
  function WorldCuisineClickHandler(cuisine) {
    setCuisine(cuisine);
  }
  return (
    <div className="App">
      <h1>🍔 World Cuisine </h1>
      <p
        style={{
          width: "40%",
          display: "block",
          margin: "auto",
          padding: "1rem"
        }}
      >
        Hey!! this is some of the mouthwatering 😋
        dishes across the world. Click on the buttons
        to check it out
      </p>
      <div>
        {Object.keys(cuisineDB).map((cuisine) => {
          return (
            <button
              onClick={() =>
                WorldCuisineClickHandler(cuisine)
              }
              style={{
                cursor: "pointer",
                padding: "0.5rem 1rem",
                margin: "1rem",
                borderRadius: "0.5rem",
                fontSize: "1rem"
              }}
            >
              {cuisine}
            </button>
          );
        })}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul>
          {cuisineDB[selectedCuisine].map((food) => (
            <li
              key={food.dishName}
              style={{
                listStyle: "none",
                border: "2px solid lightgrey",
                padding: " 0.7rem 1rem",
                borderRadius: "0.5rem",
                width: "40%",
                display: "block",
                margin: "auto",
                marginTop: "2rem"
              }}
            >
              <div style={{ fontSize: "larger" }}>
                {" "}
                {food.dishName}
              </div>
              <div>{food.popularity}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
