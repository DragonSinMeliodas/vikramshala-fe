import React, { Component } from "react";
import Divider from "../../components/divider/divider";
import Features from "../../components/features/features";
import FeaturesWithoutIcons from "../../components/features/featuresWithoutIcons";
import Hero from "../../components/hero/hero";
import NavBar from "../../components/navbar/navBar";
import Slider from "../../components/slider/Slider";
import Footer from "../../components/footer/footer";
import {
  DIVIDER_FEATURE,
  DIVIDER_METRICS,
} from "../../constants/dividerConstants";
import { JOBS_ARRAY } from "../../constants/sliderConstants";

const images = JOBS_ARRAY;
export default class HomePage extends Component {
  onImageClick = (imageId) => {
    console.log(imageId);
  };
  render() {
    return (
      <>
        <NavBar />
        <Hero />
        <Features />
        <Divider data={DIVIDER_FEATURE} />
        <FeaturesWithoutIcons />
        <Divider data={DIVIDER_METRICS} />
        <div className="container" style={{ paddingBottom: "3rem" }}>
          <Slider
            options={{
              autoPlay: 2000,
              pauseAutoPlayOnHover: true,
              // wrapAround: true,
              // fullscreen: true,
              // adaptiveHeight: true,
            }}
          >
            {images.map((image, index) => (
              <div style={{ width: "50%", height: "400px" }} key={index}>
                <img
                  src={image.imagePath}
                  alt="Image"
                  onClick={() => this.onImageClick(image.imageId)}
                />
              </div>
            ))}
          </Slider>
        </div>
        <Footer />
      </>
    );
  }
}
