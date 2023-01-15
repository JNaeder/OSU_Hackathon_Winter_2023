import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";

function SignupUser({ auth }) {
  const [theEmail, setTheEmail] = useState("");
  const [thePassword, setThePassword] = useState("");

  const signupButton = async function (e) {
    e.preventDefault();
    const user = await createUserWithEmailAndPassword(
      auth,
      theEmail,
      thePassword
    )
      .then((userCredential) => userCredential.user)
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <h3>Sign Up</h3>
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
        <button type="submit" onClick={signupButton}>
          Sign Up
        </button>
      </form>
    </>
  );
}

export default SignupUser;
