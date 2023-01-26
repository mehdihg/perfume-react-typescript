import { Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "./Card";
import products from "../data/products.json";
import { CardMotion } from "../utils/CardMotion";
import { useRef } from "react";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
  },
};
const ProductSlider = () => {
  const scrollRef: React.MutableRefObject<null> = useRef(null);
  return (
    <Container>
      <h2 style={{ textAlign: "center" }} className="mb-5 products-title">
        Popular
      </h2>

      <Carousel responsive={responsive} ref={scrollRef}>
        {products.map((item) => {
          return (
            <CardMotion key={item.id}>
              <Card {...item} />
            </CardMotion>
          );
        })}
      </Carousel>
    </Container>
  );
};
export default ProductSlider;
