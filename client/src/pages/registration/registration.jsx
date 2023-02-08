import React from "react";
import abstractArt from "../../assets/abstractArt.svg";

export default function Registration() {
  return (
    <body className="flex min-h-screen">
      <div class="flex-1 bg-indigo-50">
        <div className="logo-container container flex h-full max-lg:hidden">
          <img
            className="h-full w-auto object-cover"
            src={abstractArt}
            alt="logo"
          />
        </div>
      </div>
      <div class="flex-1 bg-indigo-50">
        <h1 className=" text-7xl p-2 ">Let's Create Your Account</h1>

        <div className="pt-80 sm:pr-0">
          <input
            className="rounded border text-xl border-b-gray-300 w-96 h-12 pl-4"
            type="email"
            placeholder="johndoe@gmail.com"
            required
          />
        </div>
        <div className="pt-3 sm:items-center">
          <input
            className="rounded border text-xl border-b-gray-300 w-96 h-12 pl-4"
            type="email"
            placeholder="johndoe@gmail.com"
            required
          />
        </div>
      </div>
    </body>
  );
}
