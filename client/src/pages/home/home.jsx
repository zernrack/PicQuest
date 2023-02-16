import React from "react";
import TabSelector from "./selector";
import Logo from "../../assets/Logo.svg";

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center">
        <img className="w-72 h-full" src={Logo} alt="" />
      </div>
      <div className="flex md:ml-9 flex-row ml-28 mt-10  max-w-full gap-2">
        <TabSelector />
      </div>
    </>
  );
}
