import React, { useRef, useState } from "react";
import { validate } from "../utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Loginpage = () => {
  const [issignedin, setissignedin] = useState(true);
  const navigate = useNavigate();

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
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;

          navigate("/browse");
        })
        .catch((error) => {
          seterrormessage("Try again later");
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          navigate("/browse");
        })
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
      <div className="bg-gradient-to-b from-black absolute z-10 ">
        <img
          className="w-52 p-2 ml-20 "
          alt="logo"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        />
      </div>

      <div>
        <img
          className=" absolute w-[calc(100dvw)] h-[calc(100dvh)]  "
          alt="bg-img"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/5b22968d-b94f-44ec-bea3-45dcf457f29e/IN-en-20231204-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        />
      </div>

      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="sm:bg-opacity-[0.85] bg-black absolute p-12 my-36 w-[calc(100dvw)] h-[calc(100dvh)] sm:w-3/12 sm:h-auto  mx-auto right-0 left-0 text-white rounded-md"
        >
          <h1 className="font-bold text-3xl py-3 m-2">
            {issignedin ? "Sign In" : "Sign Up"}
          </h1>

          {!issignedin && (
            <input
              ref={null}
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
