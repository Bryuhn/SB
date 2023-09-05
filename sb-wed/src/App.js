import NavBar from "./components/nav";
import React from 'react'
import Coming from "./components/yourcoming";
import DefaultBg from "./components/bg";




function Welcome() {
  return (
    <div className="">
      <NavBar/>
      <DefaultBg/>
      <Coming/>
    </div>
  );
}

export default Welcome;
