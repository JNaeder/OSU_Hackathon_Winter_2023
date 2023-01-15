import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";

function Navigation({ auth }) {
  const navigate = useNavigate();

  const signOutUser = function () {
    signOut(auth);
    navigate("/");
  };

  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/mealbuilder">Meal Builder</Link>
      <button onClick={signOutUser}>Sign Out</button>
    </>
  );
}

export default Navigation;
