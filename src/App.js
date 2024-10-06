import React from "react";
import Carousel from "./component/slider/Slider";
import SecondCont from "./component/slider/FirstSlider"

const App = () => {
  const slides = [
    {
      title: "Lorem ipsum",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae quidem",
      buttonText: "Know More"
    },
    {
      title: "Lorem ipsum",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae quidem",
      buttonText: "Know More"
    },
    {
      title: "Lorem ipsum",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae quidem ",
      buttonText: "Know More"
    },
    {
      title: "Lorem ipsum",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae quidem ",
      buttonText: "Know More"
    },
    {
      title: "Lorem ipsum",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae quidem",
      buttonText: "Know More"
    },
    {
      title: "Lorem ipsum",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae quidem ",
      buttonText: "Know More"
    },
  ];

  const firstSlides = [
    {
      title: "Lorem ipsum",
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd",
      buttonText: "Know More"
    },
    {
      title: "Lorem ipsum",
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd.",
      buttonText: "Know More"
    },
    {
      title: "Lorem ipsum",
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd.",
      buttonText: "Know More"
    },
  ]

  return (
    <div className="App">
      <SecondCont slides ={firstSlides}/>
      {/* <h1>Carousel with Reusable Container</h1> */}
      <Carousel slides={slides} />

    </div>
  );
};

export default App;
