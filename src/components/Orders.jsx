import React from "react";
import { useSelector } from "react-redux";

function Orders() {
  const orders = useSelector((state) => state.orders.orders);

  return (
    <div className="p-4 sm:p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {orders.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-100">No orders yet.</p>
        ) : (
          orders.map((order, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 border hover:shadow-xl transition"
            >
              {/* Order Header */}
              <div className="flex justify-between mb-3">
                <p className="font-semibold text-gray-800 dark:text-gray-100">
                  Ordered at {order.orderTime}
                </p>
              </div>

              {/* User Info */}
              <p className="text-sm text-gray-500 dark:text-gray-100 mb-2">
                {order.customer}
              </p>

              {/* Items */}
              <ul className="text-gray-700 dark:text-gray-100 text-sm mb-3 space-y-1">
                {order.items.map((item) => (
                  <li key={item.id}>
                    {item.name} × {item.quantity} — ₹
                    {item.price * item.quantity}
                  </li>
                ))}
              </ul>

              {/* Total */}
              <p className="font-semibold text-gray-800 dark:text-gray-100">
                Total: ₹{order.total}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Orders;
