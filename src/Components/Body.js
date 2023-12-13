import React, { useEffect } from "react";
import Loginpage from "./Loginpage";
import {
  RouterProvider,
  createBrowserRouter,
  useNavigate,
} from "react-router-dom";
import Browse from "./Browse";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Body = () => {
  const dispacth = useDispatch();

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

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispacth(addUser({ uid: uid, email: email, displayName: displayName }));
      } else {
        dispacth(removeUser());
      }
    });
  }, []);

  return (
    <div>
      <RouterProvider router={approuter} />
    </div>
  );
};

export default Body;
