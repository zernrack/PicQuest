import React from "react";
import TabSelector from "./selector";
import Logo from "../../assets/Logo.svg";
import Login from "../login/login";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <img className="w-72 h-full" src={Logo} alt="" />
        <h1 className=" md:text-2xl font-serif text-3xl font-medium">
          A place to show your photography skills
        </h1>
      </div>
      <div className="flex md:ml-9 flex-row items-start justify-start ml-28 mt-10  max-w-full gap-2">
        <TabSelector />
      </div>
    </>
  );
}
