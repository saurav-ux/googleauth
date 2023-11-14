import React from "react";
import { useGetLoginDataQuery } from "../Services/loginApi";
import googleImg from "../Images/gmg.png";
const Login = () => {
  const { data: loginData } = useGetLoginDataQuery();

  console.log(loginData);

  const handleClick = () => {
    window.open(`http://localhost:5001/auth/google/callback`, "_self");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center", // Center horizontally
        alignItems: "center", // Center vertically
        height: "100vh", // Set height to fill the viewport height
      }}
    >
      <button
        style={{
          backgroundColor: "white",
          fontSize: "18px",
          cursor: "pointer",
          padding: "13px",
          borderRadius: "10px",
          display: "flex",
          alignItems: "center", // Align items vertically
        }}
        onClick={handleClick}
      >
        <img
          src={googleImg}
          alt="Google Logo"
          style={{
            width: "25px",
            marginRight: "10px", // Add space between image and text
          }}
        />
        <span>Sign in with Google</span>
      </button>
    </div>
  );
};

export default Login;
