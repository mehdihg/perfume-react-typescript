import { Container } from "react-bootstrap";
import Card from "../components/Card";
import ImgOne from "../assets/products/p-chanel.png";
import ImgTwo from "../assets/products/p-shalimarr.png";
import ImgThree from "../assets/products/p-guelriann.png";
import ImgFour from '../assets/products/miracle.png'
import products from '../data/products.json'
export const Store = () => {
  return( 
  <Container>
    <div className="d-flex justify-content-center pt-5 flex-wrap">
    {
          products.map((item)=>{
            return(

              <Card {...item} key={item.id} />

            )
          })
        }
    </div>
  </Container>
  )
};
