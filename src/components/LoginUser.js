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
      });
  };

  return (
    <>
      <h3>Log In</h3>
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
    </>
  );
}

export default LoginUser;
