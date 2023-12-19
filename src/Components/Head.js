import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import { Logo, User_logo } from "../utils/constants";

const Head = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispacth = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispacth(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        navigate("/");
        dispacth(removeUser());
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handlesignoutbtn = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };
  return (
    <div className="bg-gradient-to-b from-black  z-10 flex justify-between fixed w-screen ">
      <img className="w-52 p-2 ml-20 " alt="logo" src={Logo} />

      {user && (
        <div className="sm:flex   items-center p-2 ">
          <span className="rounded-lg">
            <img
              className="w-10 sm:w-20 ml-8   sm:p-2 "
              alt="user-logo"
              src={User_logo}
            />
          </span>
          <button
            className="text-white font-bold  sm:text-xl mr-4 "
            onClick={handlesignoutbtn}
          >
            (Sign out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Head;
