import LoginUser from "../components/LoginUser";
import SignupUser from "../components/SignupUser";
import "./LoginPage_Style.css";
import beaver_logo from "../imgs/Oregon_State_Beavers_logo_PNG3.png";

function LoginPage({ auth }) {
  return (
    <>
      <div className="top_bar">
        <img src={beaver_logo} className="main_logo" />
        <h1 className="main_title">Beaver CalorieTrac</h1>
      </div>
      <LoginUser auth={auth} />
      <SignupUser auth={auth} />

      <footer>By John Naeder - 2023</footer>
    </>
  );
}

export default LoginPage;
