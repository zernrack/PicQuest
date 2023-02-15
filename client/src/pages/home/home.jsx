import React from "react";
import Feed from "./feed/index";
import TabSelector from "./selector";

export default function Home() {
  return (
    <>
      <div className="flex flex-row ml-10 mt-20  max-w-6xl gap-2">
        <TabSelector />
      </div>
    </>
  );
}
