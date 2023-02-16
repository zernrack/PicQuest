import React from "react";
import TabButton from "./TabButton/TabButton";
import Feed from "../feed/index";
import Contest from "../contest/Contest";

export default function TabSelector() {
  const [buttons, setButtons] = React.useState([
    {
      title: "FEED",
      checked: true,
      value: <Feed />,
    },
    {
      title: "CONTEST",
      checked: false,
      value: <Contest />,
    },
  ]);
  const [component, setComponent] = React.useState("FEED");
  function updateState(title) {
    setButtons((prevButtons) =>
      prevButtons.map((button) => {
        return button.title === title
          ? { ...button, checked: true }
          : { ...button, checked: false };
      })
    );
      //  console.log(buttons,"Clicked!");
  }

  const ButtonElements = buttons.map((button) => {
    return (
      <TabButton
        title={button.title}
        checked={button.checked}
        onClick={() => updateState(button.title)}
        value={button.value}
      />
    );
  });

  React.useEffect(() => {
    var found = buttons.find((button) => button.checked);
    setComponent(found.value);
  }, [buttons]);
  return (
    <>
      <div>
        <div className="h-auto p-2 flex bg-gray-200 mb-4 w-fit gap-2 rounded-lg">
          {ButtonElements}
        </div>
        <div>{component}</div>
      </div>
    </>
  );
}
