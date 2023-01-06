import React from "react";
import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartProvider";
import { CartItem } from "./CartItem";
import products from "../data/products.json";
type ShoppingCartProps = {
  isOpen: boolean;
  setIsOpen: (ty: boolean) => void;
};
export const ShoppingCart = ({ isOpen, setIsOpen }: ShoppingCartProps) => {
  const { cartItems } = useShoppingCart();
  return (
    <Offcanvas show={isOpen} placement="end" onHide={setIsOpen}>
      <Offcanvas.Header closeButton className="fw-bold fs-4">
        Cart
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => {
            return <CartItem key={item.id} {...item} />;
          })}
          <div className="fs-5 fw-bold">
            Total:
            {cartItems.reduce((acc, item) => {
              const itemFind =
                products.find((i) => i.id === item.id) || undefined;
              return acc + (itemFind?.price || 0) * item.quantity;
            }, 0)}
            $
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
};
