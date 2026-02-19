import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Homepage from "./pages/Homepage";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/Errorpage";
import AuthPage from "./pages/AuthPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import ShopLayout from "./pages/ShopLayout";
import ConfirmationPage from "./pages/ConfirmationPage";
import AuthLayout from "./pages/AuthLayout";

const App = () => {
  const router = createBrowserRouter([
    // ── Main site (shared Header + Footer) ──
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Homepage />,
        },
        {
          path: "about",
          element: <AboutUs />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
      ],
    },

    // ── Auth (standalone, no header/footer) ──
    {
      element: <AuthLayout />,
      children: [
        {
          path: "auth",
          element: <AuthPage />,
        },
      ],
    },

    // ── Shop flow (shared ShopLayout with stepper nav) ──
    {
      element: <ShopLayout />,
      children: [
        {
          path: "cart",
          element: <CartPage />,
        },
        {
          path: "checkout",
          element: <CheckoutPage />,
        },
        {
          path: "confirmation",
          element: <ConfirmationPage />,
        },
      ],
    },

    // ── Catch All ──
    {
      path: "*",
      element: <ErrorPage />,
    },
  ]);
  return (
    <RouterProvider
      future={{
        v7_startTransition: true,
      }}
      router={router}
    ></RouterProvider>
  );
};

export default App;
