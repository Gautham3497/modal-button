import React, { useState } from "react";
import close_icon from "../assets/close_icon.png";

const ModalButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currState, setCurrState] = useState("Sign Up");

  function modalOpen() {
    setIsModalOpen(true);
  }
  function modalClose() {
    setIsModalOpen(false);
  }

  return (
    <>
      <div className="w-[95%] h-screen flex items-center justify-center">
        {isModalOpen ? (
          <form
            action=""
            className="login-form border p-10 flex flex-col gap-5 rounded-lg bg-white w-full lg:w-1/3 relative"
          >
            <img
              onClick={modalClose}
              src={close_icon}
              alt="close_icon"
              className="size-7 cursor-pointer absolute right-3 top-2"
            />
            <h2 className="mx-auto text-2xl font-bold ">{currState}</h2>
            {currState === "Sign Up" ? (
              <input
                type="text"
                placeholder="Username"
                className="form-input px-5 py-2 rounded-md outline-none focus:ring  focus:ring-blue-600 focus:border-none border-b border-blue-600;"
                required
              />
            ) : null}

            <input
              type="email"
              placeholder="Email address"
              className="form-input px-5 py-2 rounded-md outline-none focus:ring  focus:ring-blue-600 focus:border-none border-b border-blue-600;"
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="form-input px-5 py-2 rounded-md outline-none focus:ring  focus:ring-blue-600 focus:border-none border-b border-blue-600;"
              required
            />

            {currState === "Sign Up" ? (
              <div className="login-term flex gap-2">
                <input type="checkbox" />
                <p className="">Agree to the terms of use & Privacy policy.</p>
              </div>
            ) : null}

            <button
              type="submit"
              className="submit-button  border border-blue-600 px-4 py-2 rounded-md bg-white hover:bg-blue-600 hover:text-white; "
            >
              {currState === "Sign Up" ? "Create account" : "Login now"}
            </button>

            <div className="login-forgot">
              {currState === "Sign Up" ? (
                <p className="login-toggle ">
                  Already have an account ?
                  <span
                    className="cursor-pointer text-blue-600 text-lg underline"
                    onClick={() => setCurrState("Login")}
                  >
                    Login!
                  </span>
                </p>
              ) : (
                <p className="login-toggle ">
                  Create an account ?
                  <span
                    className="cursor-pointer text-blue-600 text-lg underline"
                    onClick={() => setCurrState("Sign Up")}
                  >
                    Click here !
                  </span>
                </p>
              )}
            </div>
          </form>
        ) : (
          <button
            onClick={modalOpen}
            className="border bg-blue-500 text-white text-xl px-5 py-3 rounded-lg"
          >
            Modal
          </button>
        )}
      </div>
    </>
  );
};

export default ModalButton;
