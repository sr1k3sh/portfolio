import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import './App.scss';
import { getcolorState } from './AppSlice';
import Header from './compontents/Header';
import About from './compontents/About';
import Experience from './compontents/Experience';
import Projects from './compontents/Projects';
import 'bootstrap/dist/js/bootstrap';
import Services from './compontents/Services';
import Testimonial from './compontents/Testimonial';
import Contact from './compontents/Contact';
import { getMenuStatus } from './features/body/BodySlice';

function App(props) {

  const colorState = useSelector(getcolorState);
  const menuState = useSelector(getMenuStatus);
  // const dispatch = useDispatch();

  const classes = {
    colorState : colorState === "dark" ? "rs-app__dark " : "rs-app__light ",
    menuState : menuState ? "rs-app__opened" : "rs-app__closed"
  }

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
