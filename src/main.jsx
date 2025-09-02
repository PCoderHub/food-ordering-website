import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import MenuItem from "./pages/MenuItem.jsx";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import Category from "./pages/Category.jsx";
import Cart from "./pages/Cart.jsx";
import Checkout from "./pages/Checkout.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import UserAuth from "./pages/UserAuth.jsx";
import Admin from "./pages/Admin.jsx";
import UserOrder from "./pages/UserOrder.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import ThemeManager from "./ThemeManager.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "category/:categoryId",
        element: <Category />,
      },
      {
        path: "menu/:itemId",
        element: <MenuItem />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "checkout",
        element: (
          <ProtectedRoute allowedRoles={["user"]}>
            <Checkout />
          </ProtectedRoute>
        ),
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "user-auth",
        element: <UserAuth />,
      },
      {
        path: "orders",
        element: (
          <ProtectedRoute allowedRoles={["user"]}>
            <UserOrder />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoute allowedRoles={["admin"]}>
        <Admin />
      </ProtectedRoute>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeManager />
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
