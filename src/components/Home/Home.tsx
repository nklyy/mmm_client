import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

import '../../styles/main.css';
import './Home.css';
import ChooseFrom from '../ChooseFrom/ChooseFrom';

function Home() {
  const [cf, setSf] = useState(false)

  const handleClick = () => {
    setSf(true)
  }

  return (
    <>
      <div className="min-h-screen p-2 flex flex-col justify-center items-center ">
        <div className="m-1.5">
          {/*<Link to={'/cf'}>*/}
          {/*  <button className="btn bt">Let`s start!</button>*/}
          {/*</Link>*/}
          {cf ? <ChooseFrom/> : <button onClick={handleClick} className="btn bt">Let`s start!</button>}
        </div>
      </div>
    </>
  );
}

export default Home;
