import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

function LoginUser({ auth }) {
  const [theEmail, setTheEmail] = useState("");
  const [thePassword, setThePassword] = useState("");

  const navigation = useNavigate();

  const loginButton = function (e) {
    e.preventDefault();
    signInWithEmailAndPassword(auth, theEmail, thePassword)
      .then(() => navigation("/"))
      .catch((error) => {
        console.log(error);
        alert(error.message);
      });
  };

  return (
    <div className="input_container">
      <h2>Log In</h2>
      <form>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          onChange={(e) => setTheEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          onChange={(e) => setThePassword(e.target.value)}
        />
        <button type="submit" onClick={loginButton}>
          Log In
        </button>
      </form>
    </div>
  );
}

export default LoginUser;
