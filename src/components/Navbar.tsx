import {
  Button,
  Container,
  Nav,
  Navbar as NavbarBS,
  NavItem,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "../styles/Navbar.css";
import { motion } from "framer-motion";
import { useState } from "react";
import { useShoppingCart } from "../context/ShoppingCartProvider";
import { ShoppingCart } from "./ShoppingCart";
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { quantityItems } = useShoppingCart();
  return (
    <motion.div
      initial={{ opacity: 0.1 }}
      animate={{
        opacity: 1,
        transition: {
          duration: 0.7,
        },
      }}
    >
      <NavbarBS className="bg-white shadow-sm">
        <Container fluid>
          <Nav defaultActiveKey="/" as="ul" className="navbar list-unstyled">
            <NavItem as={"li"}>
              <Nav.Link as={NavLink} to="/">
                Home
              </Nav.Link>
            </NavItem>
            <NavItem as={"li"}>
              <Nav.Link as={NavLink} to="/store">
                Store
              </Nav.Link>
            </NavItem>
            <NavItem as={"li"}>
              <Nav.Link as={NavLink} to="/about">
                About
              </Nav.Link>
            </NavItem>
          </Nav>

          <Button
            onClick={() => setIsOpen(!isOpen)}
            variant="outline-dark"
            className="cart-button d-flex justify-content-center align-items-center rounded-circle"
          >
            <AiOutlineShoppingCart style={{ fontSize: "25px" }} />
            <div
              className="cart-number d-flex justify-content-center align-items-center position-absolute rounded-circle"
              style={{ fontWeight: "bold" }}
            >
              {quantityItems}
            </div>
          </Button>
        </Container>
      </NavbarBS>
      <ShoppingCart isOpen={isOpen} setIsOpen={() => setIsOpen(!isOpen)} />
    </motion.div>
  );
};
