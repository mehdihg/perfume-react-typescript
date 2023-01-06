import React from "react";

import Carousel from "react-bootstrap/Carousel";
import firstSlide from "../assets/first.jpg";
import secondSlide from "../assets/second.jpg";
import thirdSlide from "../assets/third.jpg";
import "../styles/MainSlider.css";
import { motion } from "framer-motion";
export const MainSlider = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <motion.div
            initial={{ opacity: 0.1 }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.7,
                delay: 0.1,
              },
            }}
          >
            <img
              className="d-block slider-img"
              src={firstSlide}
              alt="First slide"
            />
          </motion.div>
          <Carousel.Caption className="slider-caption">
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  ease: "easeInOut",
                  duration: 1,
                  delay: 0.2,
                },
              }}
            >
              <h3 className="slider-title">Miss Dior Perfume</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </motion.div>
          </Carousel.Caption>
          <div className="black-layout"></div>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block slider-img"
            src={secondSlide}
            alt="First slide"
          />

          <Carousel.Caption className="slider-caption">
            <h3>Marc Jacobs Fragrance</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
          <div className="black-layout"></div>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block slider-img"
            src={thirdSlide}
            alt="First slide"
          />

          <Carousel.Caption className="slider-caption">
            <h3>CHANEL Perfume & Cologne</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
          <div className="black-layout"></div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
