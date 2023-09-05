import React from 'react'
import NavBar from "./components/nav";
import DefaultBg from "./components/bg";
import Travel from "./components/travelaccom";

function Welcome() {
  return (
    <div className="">
      <NavBar/>
      <DefaultBg/>
      <Travel/>
    </div>
  );
}

export default Welcome;
