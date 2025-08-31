import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function UserAuth() {
  const navigate = useNavigate();
  const [login, setLogin] = useState(true);

  const handleSignUp = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!email.trim() || !password.trim()) {
      alert("Enter email and password");
      return;
    }

    const user = {
      email,
      password,
      role: email === "admin@admin.com" ? "admin" : "user",
    };

    localStorage.setItem("user", JSON.stringify(user));
    setLogin(true);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (
      storedUser &&
      storedUser.email === email &&
      storedUser.password === password
    ) {
      localStorage.setItem("isLoggedIn", true);
      navigate("/");
    } else {
      alert("Invalid credentials");
      setLogin(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="shadow-lg rounded-xl w-full max-w-md p-8">
        <h1 className="text-3xl font-bold text-center text-sky-600 mb-6">
          {login ? "Welcome Back!" : "Create Account"}
        </h1>

        <form onSubmit={login ? handleLogin : handleSignUp}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-sky-400"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-sky-400"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-sky-500 text-white py-3 rounded-full hover:bg-sky-600 transition"
          >
            {login ? "Log In" : "Sign Up"}
          </button>
        </form>

        <p className="mt-4 text-center">
          {login ? "Don't have an account?" : "Already have an account?"}
          <button
            className="text-sky-500 ml-1"
            onClick={() => setLogin(!login)}
          >
            {login ? "Sign Up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
}

export default UserAuth;
