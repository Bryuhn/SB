import React from 'react'
import NavBar from "./components/nav";
import DefaultBg from "./components/bg";
import Questionaire from './components/questions';
import Text from './components/text';
import Travel from './components/travelaccom';
import Coming from './components/yourcoming';
import Contact from './components/contact';
import {Routes, Route } from "react-router-dom";



function Welcome() {
  return (
    <div className="">
      <NavBar/>
      <DefaultBg/>
      <Routes>
        <Route path='/' element={<Text/>} />
        <Route path='/welcome' element={<Text/>} />
        <Route path='/yourecoming' element={<Coming/>} />
        <Route path='/travel&accomadation' element={<Travel/>} />
        <Route path='/questionaire' element={<Questionaire/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </div>
  );
}

export default Welcome;
