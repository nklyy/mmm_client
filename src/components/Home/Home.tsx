import React from "react";
import { Link } from "react-router-dom";

import "./Home.css";

function Home() {
  return (
    <>
      <div className={"container"}>
        <div className="lrBtn">
          <Link to={"/login"}>
            <button className="btn bt">Let`s start!</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
