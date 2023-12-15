import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { removeUser } from "../utils/userSlice";

const Head = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispacth = useDispatch();

  const handlesignoutbtn = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {});
  };
  return (
    <div className="bg-gradient-to-b from-black absolute z-10 flex justify-between  w-screen">
      <img
        className="w-52 p-2 ml-20 "
        alt="logo"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
      />

      {user && (
        <div className="flex items-center p-2 ">
          <img
            className="w-20 p-2"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          />
          <button
            className="text-white font-bold text-xl"
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
