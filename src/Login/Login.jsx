import { Button } from "@material-ui/core";
import React from "react";
import "./Login.css";
import { provider, auth } from "../firebase";
import useStateValue from "../Context/authContext";
import { actionTypes } from "../Context/reducer";
function Login() {
  const [{}, dispatch] = useStateValue();
  //authentication method
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) =>
        dispatch({ type: actionTypes.SET_USER, user: result.user })
      )
      .catch((error) => alert(error.message));
  };
  //
  return (
    <div className="login">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/479px-WhatsApp.svg.png"
        alt="whatsapp"
      />
      <h1>Welcome to Whatsapp</h1>
      <Button onClick={signIn}>Sign in to Whatsapp</Button>
    </div>
  );
}

export default Login;
