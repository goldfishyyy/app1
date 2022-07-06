// import React from "react";
// import ReactDOM from "react-dom/client";
// import {ShowAlert} from "./ShowAlert";
// import {SayHi} from "./ShowAlert";

// const root = ReactDOM.createRoot(document.getElementById("root"));

// //create a third compponent for decision 
// function Decision(props){
//     const d = props.d; 
//     if(d === 1){
//         return <SayHi />
//     }
//     return <ShowAlert />
// }



import React from 'react'; 
import ReactDOM from 'react-dom/client';
import {useState} from 'react';

function Car() {
    const [car, setCar] = useState({
      brand: "Ford",
      model: "Mustang",
      year: "1964",
      color: "red"
    });
    
    const updateColor = () => {
      setCar(previousState => {
        return { ...previousState, color: "blue" }
      });
    }
  
    return (
      <>
        <h1>My {car.brand}</h1>
        <p>
          It is a {car.color} {car.model} from {car.year}.
        </p>
        <button
          type="button"
          onClick={updateColor}
        >Blue</button>
      </>
    )
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Car />);