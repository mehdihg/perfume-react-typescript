import React from "react";
import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartProvider";
import products from "../data/products.json";
import { BsTrash } from "react-icons/bs";
type CartItemProps = {
  id: number;
  quantity: number;
};
export const CartItem = ({ id, quantity }: CartItemProps) => {
  const { removeFromCart } = useShoppingCart();
  const items = products.find((item) => item.id === id);
  if (items === null) return null;
  return (
    <Stack gap={2} direction="horizontal">
      <img
        src={items?.imageUrl}
        style={{ width: "100px", height: "100px", objectFit: "cover" }}
      />
      <div className="me-auto">
        {items?.title}{" "}
        {quantity >= 1 && (
          <span className="text-muted" style={{ fontSize: "0.7rem" }}>
            x{quantity}
          </span>
        )}
        <div className="text-muted" style={{ fontSize: "0.9rem" }}>
          {items?.price}$
        </div>
      </div>
      <div
        style={{ fontWeight: "700", marginRight: "1.2rem", fontSize: "18px" }}
      >
        {(items?.price || 0) * quantity}$
      </div>
      <div
        style={{ fontSize: "20px", marginRight: "0.5rem", cursor: "pointer" }}
      >
        <BsTrash onClick={() => removeFromCart(id)} />
      </div>
    </Stack>
  );
};
