import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { emptyCartItems } from "../features/cart/cartSlice";
import { addUserOrder } from "../features/orders/orderSlice";

function Checkout() {
  const cartItems = useSelector((state) => state.cart.cart);

  const [processingPayment, setProcessingPayment] = useState(false);
  const [paymentDone, setPaymentDone] = useState(false);

  const total = cartItems.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );
  const [orderPlaced, setOrderPlaced] = useState(false);
  const dispatch = useDispatch();

  const handlePayment = () => {
    setProcessingPayment(true);

    setTimeout(() => {
      setProcessingPayment(false);
      setPaymentDone(true);

      // Place order after "payment success"
      handleOrder();
    }, 3000); // simulate 3-sec payment process
  };

  const handleOrder = () => {
    setOrderPlaced(true);
    const order = {
      orderTime: new Date(Date.now()).toLocaleString(),
      customer: JSON.parse(localStorage.getItem("user")).email,
      items: cartItems,
      total: total,
    };

    dispatch(addUserOrder(order));
    dispatch(emptyCartItems());
  };

  return (
    <>
      {orderPlaced ? (
        <div
          className="bg-green-100 dark:bg-green-900 border border-green-400 dark:border-green-700 text-green-700 dark:text-green-300 px-4 py-3 rounded relative max-w-md mx-2 sm:mx-auto mt-6 text-center"
          role="alert"
        >
          <strong className="font-bold">Success!</strong>
          <span className="block sm:inline">
            {" "}
            Your order has been placed successfully!
          </span>
        </div>
      ) : (
        ""
      )}
      {!orderPlaced ? (
        <div className="container w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2 h-auto md:h-[80vh] mx-auto p-1 my-4 mt-10 border rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800">
          <div className="flex flex-col justify-between items-center h-full">
            <h3 className="font-bold text-2xl text-gray-700 dark:text-gray-200 my-3 text-center">
              Basket
            </h3>
            <div className="w-full flex flex-col items-center overflow-y-auto space-y-3 flex-1">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row justify-between items-center w-full sm:w-[95%] h-[30%] p-1 border rounded-md border-gray-300 dark:border-gray-600 m-1 bg-gray-50 dark:bg-gray-700 m-1"
                >
                  <img
                    className="w-full sm:w-1/3 h-full object-cover rounded-sm"
                    src={item.img}
                    alt={item.name}
                  />
                  <p className="text-gray-700 dark:text-gray-200">
                    {item.quantity}x
                  </p>
                  <p className="text-gray-800 dark:text-gray-100 text-lg">
                    {item.name}
                  </p>
                  <p className="text-gray-900 dark:text-gray-100">
                    ₹{item.price}
                  </p>
                </div>
              ))}
            </div>
            <p className="w-full px-5 py-2 text-lg font-bold flex justify-between mt-2">
              <span>Order total</span> <span>₹{total}</span>
            </p>

            {!processingPayment && !paymentDone && (
              <button
                onClick={handlePayment}
                className={`text-center w-1/2 mb-5 p-1 px-2 my-2 border rounded-full ${
                  cartItems.length > 0
                    ? "bg-sky-500 text-white"
                    : "bg-gray-300 text-gray-500"
                }`}
                disabled={cartItems.length === 0}
              >
                Pay ₹{total}
              </button>
            )}

            {processingPayment && (
              <p className="text-lg font-semibold text-blue-500 my-3">
                Processing payment...
              </p>
            )}

            {paymentDone && (
              <p className="text-lg font-semibold text-green-500 my-3">
                Payment successful! Placing order...
              </p>
            )}
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Checkout;
