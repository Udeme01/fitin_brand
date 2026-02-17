import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Homepage from "./pages/Homepage";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/Errorpage";
import AuthPage from "./pages/AuthPage";

const App = () => {
  const router = createBrowserRouter([
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
        {
          path: "auth",
          element: <AuthPage />,
        },
      ],
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
