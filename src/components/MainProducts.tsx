import React, { useRef } from "react";
import leftTopImg from "../assets/btright.jpg";
import leftBottomImg from "../assets/btleft.jpg";
import middle from "../assets/middle.jpg";
import rightTopImg from "../assets/glow.jpg";
import rightBottomImg from "../assets/hamza.jpg";
import "../styles/MainProducts.css";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const MainProducts = () => {
  const scrollRef = useRef(null);
  return (
    <div>
      <Container className="my-5 text-center">
        <h3 className="products-title mb-5">Products</h3>

        <Row className="justify-content-sm-center ">
          <Col
            ref={scrollRef}
            xs={12}
            className="product-images-container left-images d-flex flex-column justify-content-md-between align-items-lg-end flex-wrap col-sm-10 mb-sm-3 col-md-4"
          >
            <Link to="/store">
              <div className="single-product-content position-relative">
                <motion.div
                  initial={{ opacity: 0, x: -80 }}
                  viewport={{ once: true }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: {
                      ease: "easeInOut",
                      duration: 0.6,
                      delay: 0.2,
                    },
                  }}
                >
                  <img
                    src={leftTopImg}
                    className="products-img w-100 mb-sm-3"
                  />
                </motion.div>
                <div className="middle-text-image">
                  <div className="middle-text">COCO CHANEL</div>
                </div>
                <div className="position-absolute products-black-layout"></div>
              </div>
            </Link>
            <Link to="/store">
              <div className="single-product-content position-relative">
                <motion.div
                  initial={{ opacity: 0, x: -80 }}
                  viewport={{ once: true }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: {
                      ease: "easeInOut",
                      duration: 0.6,
                      delay: 0.2,
                    },
                  }}
                >
                  <img src={leftBottomImg} className="products-img w-100" />
                </motion.div>
                <div className="middle-text-image">
                  <div className="middle-text">BOSS</div>
                </div>
                <div className="position-absolute products-black-layout"></div>
              </div>
            </Link>
          </Col>
          <Col
            xs={12}
            className="product-images-container middle-imgages col-sm-10 col-md-4 mb-sm-3"
          >
            <Link to="/store">
              <div className="single-product-content position-relative">
                <motion.div
                  viewport={{ once: true }}
                  initial={{ opacity: 0, y: -80 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      ease: "easeInOut",
                      duration: 0.6,
                      delay: 0.2,
                    },
                  }}
                >
                  <img src={middle} className="products-img  w-100" />
                </motion.div>
                <div className="middle-text-image">
                  <div className="middle-text">ALFA MONTE</div>
                </div>
                <div className="position-absolute products-black-layout"></div>
              </div>
            </Link>
          </Col>
          <Col
            xs={12}
            className="product-images-container right-images d-flex flex-column justify-content-md-between col-sm-10 mb-sm-3 col-md-4 col-xs-12 "
          >
            <Link to="/store">
              <div className="single-product-content position-relative">
                <motion.div
                  viewport={{ once: true }}
                  initial={{ opacity: 0, x: 80 }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: {
                      ease: "easeInOut",
                      duration: 0.6,
                      delay: 0.2,
                    },
                  }}
                >
                  <img src={rightTopImg} className="products-img w-100" />
                </motion.div>
                <div className="middle-text-image">
                  <div className="middle-text">NORTHERN GLOW</div>
                </div>
                <div className="position-absolute products-black-layout"></div>
              </div>
            </Link>
            <Link to="/store">
              <div className="single-product-content position-relative">
                <motion.div
                  viewport={{ once: true }}
                  initial={{ opacity: 0, x: 80 }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: {
                      ease: "easeInOut",
                      duration: 0.6,
                      delay: 0.2,
                    },
                  }}
                >
                  <img src={rightBottomImg} className="products-img w-100" />
                </motion.div>
                <div className="middle-text-image">
                  <div className="middle-text">H&M</div>
                </div>
                <div className="position-absolute products-black-layout"></div>
              </div>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
