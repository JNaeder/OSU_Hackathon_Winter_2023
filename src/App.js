import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import RoutingStuff from "./components/RoutingStuff";
import LoginPage from "./pages/LoginPage";

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
const db = getFirestore(app);
const auth = getAuth(app);

function App() {
  const [currentUser, setCurrentUser] = useState(auth.currentUser);

  onAuthStateChanged(auth, () => {
    setCurrentUser(auth.currentUser);
  });
  return (
    <BrowserRouter>
      {currentUser ? (
        <RoutingStuff db={db} auth={auth} app={app} />
      ) : (
        <LoginPage auth={auth} />
      )}
    </BrowserRouter>
  );
}

export default App;
