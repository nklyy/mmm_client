import React from 'react';
import { Link } from 'react-router-dom';

import '../../styles/main.css';
import './Home.css';

function Home() {
  return (
    <>
      <div className="min-h-screen p-2 flex flex-col justify-center items-center ">
        <div className="m-1.5">
          <Link to={'/cf'}>
            <button className="btn bt">Let`s start!</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
