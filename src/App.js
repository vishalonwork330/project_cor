import React from "react";
import Carousel from "./component/slider/Slider";
import SecondCont from "./component/slider/FirstSlider";
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";
import FAQSection from "./component/FAQ/Faq";
import Content from "./component/content/Content";
import Subscribe from "./component/subscibe/Subscribe";
import Examdate from "./component/examdate/Examdate"

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
      <Header/>
      <SecondCont slides ={firstSlides}/>
      <Examdate/>
      <Carousel slides={slides} />
      <Content/>
      <FAQSection/>
      <Subscribe/>
      <Footer/>
    </div>
  );
};

export default App;
