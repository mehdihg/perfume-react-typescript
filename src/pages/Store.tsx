import { Container } from "react-bootstrap";
import Card from "../components/Card";

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
