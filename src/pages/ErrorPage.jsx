import React from "react";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="bg-orange-50 dark:bg-gray-700 flex items-center justify-center h-screen">
      <div className="text-center px-6">
        <img
          src="https://cdn-icons-png.flaticon.com/512/857/857681.png"
          alt="Hungerly Logo"
          className="mx-auto w-24 mb-6"
        />

        <h1 className="text-6xl font-extrabold text-sky-600 mb-4">404</h1>
        <p className="text-2xl font-semibold text-gray-700 mb-2">
          Oops! Page Not Found
        </p>
        <p className="text-gray-500 dark:text-gray-200 mb-6">
          It looks like you’re hungry but this page doesn’t exist. Let’s get you
          back to something delicious!
        </p>

        <Link
          to="/"
          className="bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition"
        >
          🍔 Back to Home
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
