import React from "react";
import ReactDOM from "react-dom/client";

function Car(props) {
  return <li>I am a {props.color} car </li>;
}

function Garage() {
  const myColor = ["red", "yellow", "green"];
  return (
    <>
      <h1>what color is your car?</h1>
      <ul>
        {myColor.map((color) => {
          <Car color={color} />;
        })}
      </ul>
    </>
  );
}
//create root
const root = ReactDOM.createRoot(getElementById("root"));
root.render(<Garage />);
