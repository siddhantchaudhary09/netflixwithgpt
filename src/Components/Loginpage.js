import React, { useRef, useState } from "react";
import { validate } from "../utils/Validate";
import { updateProfile } from "firebase/auth";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";

import Head from "./Head";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { BG_IMG } from "../utils/constants";

const Loginpage = () => {
  const [issignedin, setissignedin] = useState(true);

  const dispacth = useDispatch();

  const [errormessage, seterrormessage] = useState();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handlesignclicked = () => {
    const message = validate(email.current.value, password.current.value);
    seterrormessage(message);
    if (message) return;

    if (!issignedin) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
        name.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              // Profile updated!
              // ...

              const { uid, email, displayName } = auth.currentUser;
              dispacth(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
        })
        .catch((error) => {
          seterrormessage(error.message);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {})
        .catch((error) => {
          seterrormessage("User not registered");
        });
    }
  };
  const handlesignin = () => {
    setissignedin(!issignedin);
  };
  return (
    <div>
      <Head />
      <div className="relative">
        <img
          className="  absolute w-[calc(100dvw)] h-[calc(100dvh)]   "
          alt="bg-img"
          src={BG_IMG}
        />
      </div>

      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="sm:bg-opacity-[0.85] bg-black z-10 absolute p-12 my-36 w-[calc(100dvw)] h-[calc(100dvh)] sm:w-3/12 sm:h-auto  mx-auto right-0 left-0 text-white rounded-md"
        >
          <h1 className="font-bold text-3xl py-3 m-2">
            {issignedin ? "Sign In" : "Sign Up"}
          </h1>

          {!issignedin && (
            <input
              ref={name}
              type="text"
              placeholder="Name"
              className="bg-gray-700 m-2 p-3  w-full rounded-sm "
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email"
            className="bg-gray-700 m-2 p-3  w-full rounded-sm "
          />
          <input
            ref={password}
            type="password"
            placeholder="Password "
            className="bg-gray-700 m-2 p-3 w-full  rounded-sm "
          />
          <p className="pb-2 pl-2 font-bold text-xl text-red-500">
            {" "}
            {errormessage}
          </p>
          <button
            onClick={handlesignclicked}
            className="m-2 mt-6 p-2 bg-red-700 w-full rounded-md font-bold text-2xl "
          >
            {issignedin ? "Sign In" : "Sign Up"}
          </button>

          <p
            className="m-2 p-3 mt-10 cursor-pointer  hover:underline"
            onClick={handlesignin}
          >
            {issignedin
              ? "New to Netflix? Sign up now"
              : "Already a User? Sign in now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Loginpage;
