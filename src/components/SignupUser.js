import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

function SignupUser({ auth }) {
  const [theEmail, setTheEmail] = useState("");
  const [thePassword, setThePassword] = useState("");
  const [theDisplayName, setTheDisplayName] = useState("");

  const signupButton = async function (e) {
    e.preventDefault();
    await createUserWithEmailAndPassword(auth, theEmail, thePassword)
      .then((userCredential) => {
        console.log(userCredential.user);
        alert(`Made new User!`);
      })
      .then(() => {
        updateProfile(auth.currentUser, { displayName: theDisplayName });
      })
      .catch((error) => {
        alert(error.message);
        console.log(error);
      });
  };

  return (
    <div className="input_container">
      <h2>Sign Up</h2>
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
        <label htmlFor="displayName">Your Name</label>
        <input
          type="text"
          name="displayName"
          onChange={(e) => setTheDisplayName(e.target.value)}
        />
        <button type="submit" onClick={signupButton}>
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignupUser;
