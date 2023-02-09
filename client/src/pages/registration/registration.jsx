import React from "react";
import AbstractArt from "../../assets/abstractArt.svg";

export default function Registration() {
  return (
    <body className="flex min-h-screen">
      <div class="flex-1 bg-indigo-50">
        <div className="logo-container container flex h-full md:hidden">
          <img
            className="h-full w-auto object-cover"
            src={AbstractArt}
            alt="logo"
          />
        </div>
      </div>
      <div class="flex-1 bg-indigo-50">
        <h1 className=" text-5xl font-bold pt-32 sm:text-5xl sm:-ml-52 -ml-18">
          Create Account
        </h1>
        <h2 className="text-md sm:-ml-52 font-light pl-4 ">
          Let's Create Your Account!
        </h2>
        <div className=" sm:-ml-44 ml-8 lg:-ml-18">
          <div className="pt-32 sm:pt-32">
            <input
              className="rounded border text-xl border-b-gray-300 w-96 h-12 pl-4"
              type="text"
              placeholder="NAME"
              required
            />
          </div>
          <div className="pt-3 ">
            <input
              className="rounded border text-xl border-b-gray-300 w-96 h-12 pl-4"
              type="email"
              placeholder="EMAIL"
              required
            />
          </div>
          <div className="pt-3 ">
            <input
              className="rounded border text-xl border-b-gray-300 w-96 h-12 pl-4"
              type="password"
              placeholder="PASSWORD"
              required
            />
          </div>
          <div className="pt-3 ">
            <input
              className="rounded border text-xl border-b-gray-300 w-96 h-12 pl-4"
              type="password"
              placeholder="CONFIRM PASSWORD"
              required
            />
            <div className="pt-10 pl-28">
              <button
                type="submit"
                class=" text-center py-3 rounded bg-green-700 text-white hover:bg-green-dark hover:bg-green-400 w-44 h-12 pl-4"
              >
                Create Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}
