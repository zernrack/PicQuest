import React, { useState } from "react";
import AbstractArt from "../../assets/abstractArt.svg";

export default function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegistration = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    window.location.href = "/";
  };

  return (
    <body className="flex min-h-screen">
      <div class="flex-1 bg-indigo-100">
        <div className="logo-container container flex h-full md:hidden">
          <img
            className="h-full w-auto object-cover"
            src={AbstractArt}
            alt="logo"
          />
        </div>
      </div>
      <div class="flex-1 bg-indigo-100">
        <h1 className=" text-5xl font-bold pt-32 sm:text-5xl sm:-ml-52 -ml-18">
          Create Account
        </h1>
        <h2 className="text-md sm:-ml-52 font-light pl-4 pt-2 ">
          Let's Create Your Account!
        </h2>
        <form onSubmit={handleRegistration}>
          <div className=" sm:-ml-44 ml-8 lg:-ml-18">
            <div className="pt-32 sm:pt-32">
              <input
                className="rounded border text-xl border-b-gray-300 w-96 h-12 pl-4"
                type="text"
                placeholder="NAME"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
              />
            </div>
            <div className="pt-3 ">
              <input
                className="rounded border text-xl border-b-gray-300 w-96 h-12 pl-4"
                type="email"
                placeholder="EMAIL"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            <div className="pt-3 ">
              <input
                className="rounded border text-xl border-b-gray-300 w-96 h-12 pl-4"
                type="password"
                placeholder="PASSWORD"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </div>
            <div className="pt-3 ">
              <input
                className="rounded border text-xl border-b-gray-300 w-96 h-12 pl-4"
                type="password"
                placeholder="CONFIRM PASSWORD"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
                required
              />
              <p class="text-sm font-thin mt-2 pt-1 mb-0">
                Already Have Account?
                <a
                  href="/"
                  class="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                >
                  Login
                </a>
              </p>
              <div className="pt-10 pl-28">
                {error && <p className="text-red-600">{error}</p>}
                <button
                  type="submit"
                  class=" text-center py-3 rounded bg-green-700 text-white hover:bg-green-dark hover:bg-green-400 w-44 h-12 pl-4 pr-4"
                >
                  Create Account
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </body>
  );
}
