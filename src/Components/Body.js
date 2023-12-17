import React from "react";
import Loginpage from "./Loginpage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Browse from "./Browse";

const Body = () => {
  const approuter = createBrowserRouter([
    {
      path: "/",
      element: <Loginpage />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={approuter} />
    </div>
  );
};

export default Body;
