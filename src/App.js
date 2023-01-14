import { useState } from "react";
import { initializeApp } from "firebase/app";
import Hint_Container from "./components/Hint_Container";
import env from "react-dotenv";

// const firebaseAPI = env.FIREBASE_API_KEY;
const foodAPI = process.env.REACT_APP_FOOD_API_KEY;
console.log(foodAPI);

const firebaseConfig = {
  apiKey: "AIzaSyDur93CUKM_7-w6NnkdNaUQu5eftN91354",
  authDomain: "hackathon-winter-23.firebaseapp.com",
  projectId: "hackathon-winter-23",
  storageBucket: "hackathon-winter-23.appspot.com",
  messagingSenderId: "127245817823",
  appId: "1:127245817823:web:ac4da6fa1a5ebaa647566a",
  measurementId: "G-0Z6LJENZ9H",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const getFood = async function (foodName) {
  const output = await fetch(
    `https://api.edamam.com/api/food-database/v2/parser?app_id=0a41c9b2&app_key=${foodAPI}&ingr=${foodName}`
  )
    .then((res) => res.json())
    .then((data) => data);
  return output;
};

function App() {
  const [inputFood, setInputFood] = useState("");
  const [foodList, setFoodList] = useState({});
  // const [currentFoodInfo, setCurrentFoodInfo] = useState();

  const submitButton = async function (e) {
    e.preventDefault();
    const output = await getFood(inputFood);
    // const newFoodInfo = output["parsed"][0]["food"];
    // setCurrentFoodInfo(newFoodInfo);
    setFoodList(output);
  };

  return (
    <div className="App">
      <h1>Enter Food</h1>
      <form>
        <label htmlFor="food_name">Enter Food</label>
        <input
          type="text"
          name="food_name"
          onChange={(e) => setInputFood(e.target.value)}
        ></input>
        <button type="submit" onClick={submitButton}>
          Enter
        </button>
      </form>

      <Hint_Container foodList={foodList} />
    </div>
  );
}

export default App;
