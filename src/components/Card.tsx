import { useShoppingCart } from "../context/ShoppingCartProvider";
import { GoTrashcan } from "react-icons/go";
import "../styles/Card.css";

type CardProps = {
  id: number;
  title: string;
  price: number;
  description: string;
  imageUrl: string;
};
const Card = ({ id, title, price, description, imageUrl }: CardProps) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);

  return (
    <div
      className="card-container"
      style={{
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        margin: "5px 5px 10px 5px",
        borderRadius: "3px",
      }}
    >
      <div>
        <div
          className="d-lg-flex flex-lg-column align-items-center"
          style={{ padding: "20px" }}
        >
          <img src={imageUrl} className="card-carousel-img" />
          <div
            style={{ borderTop: "1px solid #c6c6c6" }}
            className="d-flex  justify-content-between align-items-baseline w-100"
          >
            <h4
              className="mt-3 pt-2"
              style={{ width: "100%", fontWeight: "bold" }}
            >
              {title}
            </h4>

            <p className="mt-3 pt-2" style={{ fontWeight: "bold" }}>
              {price}$
            </p>
          </div>
          <div className="w-100">
            <p style={{ width: "96%", color: "#6c6c6c" }}>{description}</p>
          </div>
          <div className="w-100">
            {quantity >= 1 ? (
              <div className="w-100 d-flex justify-content-between align-items-center flex-row">
                <button
                  onClick={() => removeFromCart(id)}
                  className="bg-white p-2 d-flex justify-content-center align-items-center"
                  style={{
                    borderRadius: "3px",
                    fontWeight: "bold",
                    width: "44px",
                    height: "44px",
                    fontSize: "20px",
                  }}
                >
                  <GoTrashcan />
                </button>
                <div className="d-flex align-items-center justify-content-around">
                  <h4
                    onClick={() => decreaseCartQuantity(id)}
                    className="bg-white p-2 d-flex justify-content-center align-items-center d-flex justift-content-center align-items-center"
                    style={{
                      borderRadius: "3px",
                      cursor: "pointer",
                      fontWeight: "bold",
                      width: "44px",
                      height: "44px",
                      fontSize: "17px",
                      margin: 0,
                      border: "2px solid black",
                    }}
                  >
                    -
                  </h4>

                  <h6
                    style={{
                      fontSize: "20px",
                      fontWeight: "bold",
                      margin: "0 8px",
                      minWidth: "22px",
                      textAlign: "center",
                    }}
                  >
                    {quantity}
                  </h6>

                  <button
                    onClick={() => increaseCartQuantity(id)}
                    className="bg-white p-2 d-flex justify-content-center align-items-center"
                    style={{
                      borderRadius: "3px",
                      fontWeight: "bold",
                      width: "44px",
                      height: "44px",
                      fontSize: "20px",
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
            ) : (
              <button
                className="bg-white p-2 w-100"
                style={{ borderRadius: "3px", fontWeight: "bold" }}
                onClick={() => increaseCartQuantity(id)}
              >
                Add to cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
