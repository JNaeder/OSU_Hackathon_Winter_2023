import LoginUser from "../components/LoginUser";
import SignupUser from "../components/SignupUser";

function LoginPage({ auth }) {
  return (
    <>
      <LoginUser auth={auth} />
      <SignupUser auth={auth} />
    </>
  );
}

export default LoginPage;
