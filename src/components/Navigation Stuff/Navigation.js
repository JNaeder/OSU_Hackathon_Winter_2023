import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import "./Navigation_Style.css";
import beaver_logo from "../../imgs/Oregon_State_Beavers_logo_PNG3.png";

function Navigation({ auth }) {
  const navigate = useNavigate();

  const signOutUser = function () {
    signOut(auth);
    navigate("/");
  };

  return (
    <div className="navigation_bar">
      <img src={beaver_logo} className="main_logo" />
      <h1>Beaver CalorieTrac</h1>
      <span>Welcome {auth.currentUser["displayName"]}!</span>
      <div className="button_container">
        <button onClick={() => navigate("/")} className="nav_button">
          Home
        </button>
        <button onClick={signOutUser} className="nav_button">
          Sign Out
        </button>
      </div>
    </div>
  );
}

export default Navigation;
