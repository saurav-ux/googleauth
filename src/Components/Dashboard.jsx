import React from "react";
import { useGetLoginDataQuery } from "../Services/loginApi";
const Dashboard = () => {
  const { data: logindata } = useGetLoginDataQuery();

  console.log("LoginData", logindata);

  const handleClick = () => {
    window.open(`http://localhost:5001/auth/logout`, "_self");
  };

  return (
    <div className="user-container">
      <img src={logindata?.user.image} alt="User Profile" />
      <h3>Welcome {logindata?.user.displayName}</h3>
      <h3>Successfully Logged In</h3>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
};

export default Dashboard;
