import React from "react";
// import Carousel from "../carousel/carousel";
import HeaderDescription from "../description/description";
import HeaderInfo from "../info/info";
import './Home.css'
import Footer from "../footer/Footer";
function Home() {
  return (
    <section>
      <HeaderDescription />
      <HeaderInfo/>
      {/* <Carousel/> */}
      <Footer/>
    </section>
  );
}
export default Home;