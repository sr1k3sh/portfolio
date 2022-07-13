import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.scss';
import { changeColorByValue , getcolorState } from './AppSlice';
import Header from './compontents/Header';
import About from './compontents/About';
import Experience from './compontents/Experience';
import Projects from './compontents/Projects';
import 'bootstrap/dist/js/bootstrap';
import Services from './compontents/Services';
import Testimonial from './compontents/Testimonial';
import Contact from './compontents/Contact';
import { getMenuStatus } from './features/body/BodySlice';

function App() {

  const colorState = useSelector(getcolorState);
  const menuState = useSelector(getMenuStatus);
  const dispatch = useDispatch();

  const [date , setDate ] = useState(null);

  

  const classes = {
    colorState : colorState === "dark" ? "rs-app__dark " : "rs-app__light ",
    menuState : menuState ? "rs-app__opened" : "rs-app__closed"
  }

  useEffect(() => {
    
    setDate(new Date().getHours());

    if(date >= 6 && date <= 18){
      if(date < 12){
        dispatch(changeColorByValue({color:"light",greet:"Good morning"}));
      }else{
        dispatch(changeColorByValue({color:"light",greet:"Good afternoon"}))
      }
    }else{
      dispatch(changeColorByValue({color:"dark",greet:"Good evening"}));
    }

    return () => {
      
    }
  }, [date, dispatch]);

  const refs = {
    home: {
      homeRef: useRef()
    },
    about:{
      aboutRef: useRef()
    },
    experience:{
      experienceRef: useRef()
    },
    projects:{
      projectsRef: useRef()
    },
    services:{
      servicesRef: useRef()
    },
    testimonial:{
      testimonialRef: useRef()
    },
    contact:{
      contactRef: useRef()
    }
  }

  return (
    <div className={classes.colorState + classes.menuState}>

      <Header refs = { refs }></Header>
      <About refs = { refs }></About>
      <Experience refs = { refs }></Experience>
      <Projects refs = { refs }></Projects>
      <Services refs = { refs }></Services>
      <Testimonial refs = { refs }></Testimonial>
      <Contact refs = { refs }></Contact>
    </div>
  );
}

export default App;
