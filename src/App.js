import React from 'react';
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

function App() {

  const colorState = useSelector(getcolorState);
  const menuState = useSelector(getMenuStatus);
  // const dispatch = useDispatch();

  const classes = {
    colorState : colorState === "dark" ? "rs-app__dark " : "rs-app__light ",
    menuState : menuState ? "rs-app__opened" : "rs-app__closed"
  }

  return (
    <div className={classes.colorState + classes.menuState}>

      <Header></Header>
      <About></About>
      <Experience></Experience>
      <Projects></Projects>
      <Services></Services>
      <Testimonial></Testimonial>
      <Contact></Contact>
    </div>
  );
}

export default App;
