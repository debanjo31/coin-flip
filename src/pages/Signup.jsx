import React, { useState } from "react";
import supabase from "../config/supabaseClient";
import { useNavigate } from "react-router";
import logo from "../assets/coinflip.png";
import Modal from "react-modal";

function Signup() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); // new state variable
  const [showModal, setShowModal] = useState(true);
  async function handleSignUp(event) {
    event.preventDefault();
    const { email, password } = event.target.elements;

    // check if password and confirm password match
    if (password.value !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    try {
      const { user, error } = await supabase.auth.signUp({
        email: email.value,
        password: password.value,
      });
      if (error) throw error;
      setShowModal(true);
    } catch (error) {
      console.error(error);
      setErrorMessage(error.message);
    }
  }

  // update confirm password state when user types in field
  function handleConfirmPasswordChange(event) {
    setConfirmPassword(event.target.value);
  }
  function closeModal() {
    setShowModal(false);
    navigate("/login");
  }

  return (
    <div className="login-page h-screen flex justify-center items-center">
      <div className="w-1/2"></div>
      <div className="w-1/2 ">
        <div className="w-3/4  flex flex-col gap-8 align-center">
          <div className="login-header flex gap-4">
            <img src={logo} alt="coinflip login logo" />
            <h1 className="text-4xl text-white ">Crypto</h1>
          </div>
          <form onSubmit={handleSignUp} className="">
            <label htmlFor="email" className="block text-lg text-white mb-4">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="input"
              autoComplete="email"
            />
            <label
              htmlFor="password"
              className="block text-lg text-white mb-4 mt-4"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              autoComplete="current-password"
              className="input"
            />
            <label
              htmlFor="password"
              className="block text-lg text-white mb-4 mt-4"
            >
              Confirm Password
            </label>
            <input
              type="password"
              name="confirm-password"
              autoComplete="current-password"
              className="input"
              onChange={handleConfirmPasswordChange} // update confirm password state on change
            />

            <label
              htmlFor="password"
              className="block text-lg text-white mb-4 mt-4"
            >
              BTC Address ( Optional )
            </label>
            <input type="text" name="btc-address" className="input" />
            <button type="submit" className="cta-button mt-16">
              Sign Up
            </button>
            {errorMessage && (
              <p className="text-red-500 mt-4">{errorMessage}</p>
            )}
          </form>
        </div>
      </div>
      <Modal
        appElement={document.getElementById("root")}
        isOpen={showModal}
        contentLabel="Confirm Account Modal"
        onRequestClose={closeModal}
        className="Modal  z-10 bg-white"
        overlayClassName="Overlay"
      >
        <h2 className="text-2xl ">Check your inbox</h2>
        <p>
          We've sent a confirmation email to your inbox. Please follow the
          instructions in the email to confirm your account.
        </p>
        <button onClick={closeModal} className="cta-button mt-16">
          Ok
        </button>
      </Modal>
    </div>
  );
}

export default Signup;
