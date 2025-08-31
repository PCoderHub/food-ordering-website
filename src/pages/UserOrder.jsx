import React from "react";
import { useSelector } from "react-redux";

function UserOrder() {
  const orders = useSelector((state) => state.orders.orders);

  console.log(orders);

  const userOrders =
    orders.length > 0
      ? orders.filter(
          (order) => order.customer === localStorage.getItem("email")
        )
      : [];

  return (
    <div>
      {/* {userOrders.length > 0 ? userOrders.map((order) => order.items.map((item) => <div>
        <p>{item.name}</p>
      </div>)) : <p>No Orders Yet</p>} */}
      <div className="p-6">
        <h2 className="text-3xl font-bold text-gray-700 dark:text-gray-200 mb-6 text-center">
          Orders
        </h2>

        {userOrders.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-100 text-lg text-center">
            No orders yet.
          </p>
        ) : (
          <div className="space-y-6">
            {userOrders.map((order, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-5 border border-gray-200 dark:border-gray-700"
              >
                {/* Order Header */}
                <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-600 pb-3 mb-4">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    Ordered on {order.orderTime}
                  </h3>
                </div>

                {/* Items */}
                <div>
                  <h4 className="font-semibold mb-2 text-gray-700 dark:text-gray-300">
                    Items
                  </h4>
                  <ul className="divide-y divide-gray-200 dark:divide-gray-600">
                    {order.items.map((item) => (
                      <li
                        key={item.id}
                        className="flex justify-between items-center py-2"
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={item.img}
                            alt={item.name}
                            className="w-12 h-12 rounded object-cover"
                          />
                          <div>
                            <p className="text-gray-800 dark:text-gray-200 font-medium">
                              {item.name}
                            </p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              ₹{item.price} × {item.quantity}
                            </p>
                          </div>
                        </div>
                        <p className="font-semibold text-gray-700 dark:text-gray-200">
                          ₹{item.price * item.quantity}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Total */}
                <div className="flex justify-between items-center mt-4 border-t border-gray-200 dark:border-gray-600 pt-3">
                  <p className="text-gray-700 dark:text-gray-300 font-semibold">
                    Total
                  </p>
                  <p className="text-lg font-bold text-gray-800 dark:text-gray-200">
                    ₹{order.total}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default UserOrder;
