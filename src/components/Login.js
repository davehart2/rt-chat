import React from "react";
import { GoogleOutlined, GithubOutlined } from "@ant-design/icons";
import "firebase/app";
import { auth } from "../firebase";
import firebase from "firebase/app";

const Login = () => {
  return (
    <div id="login-page">
      <div id="login-card">
        <h1>RT Chat</h1>
        <h3>Please sign in:</h3>
        <div
          className="login-button google"
          onClick={() =>
            auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
          }
        >
          <GoogleOutlined /> Sign in with Google
        </div>
        <br />
        <br />
        <div
          className="login-button github"
          onClick={() =>
            auth.signInWithRedirect(new firebase.auth.GithubAuthProvider())
          }
        >
          <GithubOutlined /> Sign in with Github
        </div>
      </div>
    </div>
  );
};

export default Login;
