import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Home = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <>
      <div>This is Home Page</div>
      <div>{isAuthenticated && <p>you are logged in!</p>}</div>
    </>
  );
};

export default Home;
