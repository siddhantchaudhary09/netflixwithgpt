import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import { Logo, User_logo } from "../utils/constants";
import { addgptview, removemovies, removenames } from "../utils/Gptslice";

const Head = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispacth = useDispatch();

  const toggleView = () => {
    dispacth(addgptview());
    dispacth(removemovies());
    dispacth(removenames());
  };

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
      <img className=" w-32  sm:w-52  p-2 sm:ml-20 " alt="logo" src={Logo} />

      {user && (
        <div className="sm:flex   items-center p-2 ">
          <button
            className="bg-purple-500 p-2 rounded-lg font-semibold text-white"
            onClick={toggleView}
          >
            Gpt Search
          </button>
          <span className="rounded-lg">
            <img
              className="w-10 sm:w-20 ml-8   sm:p-2 "
              alt="user-logo"
              src={User_logo}
            />
          </span>
          <button
            className="text-white font-bold text-sm sm:text-xl ml-5 sm:ml-0 sm:mr-4 "
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
