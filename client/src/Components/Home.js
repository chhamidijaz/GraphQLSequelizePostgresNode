import "./Home.css";
import GetUsers from "./GetUsers";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();
  return (
    <>
      <GetUsers />
      <button className="button" onClick={() => history.push("/create")}>
        Create User
      </button>
    </>
  );
}

export default Home;
