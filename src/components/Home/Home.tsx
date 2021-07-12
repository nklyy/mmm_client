import React from 'react';
// import { Link } from 'react-router-dom';

import '../../styles/main.css';
import './Home.css';

// import ChooseFrom from '../ChooseFrom/ChooseFrom';
// import { PageContext } from '../../context/PageContext';
import { Link } from 'react-router-dom';

function Home() {
  // const { cf, setCf } = useContext(PageContext);
  //
  // const handleClick = () => {
  //   setCf(true);
  // };

  return (
    <>
      <div className="min-h-screen p-2 flex flex-col justify-center items-center">
        <div className="m-1.5">
          <Link to={'/cf'}>
            <button className="btn bt">Let`s start!</button>
          </Link>
          {/*{cf ? (*/}
          {/*  <ChooseFrom />*/}
          {/*) : (*/}
          {/*  <button onClick={handleClick} className="btn bt">*/}
          {/*    Let`s start!*/}
          {/*  </button>*/}
          {/*)}*/}
        </div>
      </div>
    </>
  );
}

export default Home;
