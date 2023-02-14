import React from "react";
import TabButton from "./TabButton/TabButton";

export default function TabSelector() {
  const [buttons, setButtons] = React.useState([
    {
      title: "Feed",
      checked: true,
      value: <>h1</>,
    },
    {
      title: "Contest",
      checked: false,
      value: <>h2</>,
    },
  ]);
  const [component, setComponent] = React.useState("Feed");
  function updateState(title) {
    setButtons((prevButtons) =>
      prevButtons.map((button) => {
        return button.title === title
          ? { ...button, checked: true }
          : { ...button, checked: false };
      })
    );
    //    console.log(buttons);
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
      <div className="m-auto max-w-4xl min-w-fit md:p-0 md:pl-12 md:pr-12 md:pb-12">
        <div className="h-auto p-2 flex bg-gray-200 mb-4 w-fit gap-2 rounded-lg">
          {ButtonElements}
        </div>
      </div>
    </>
  );
}
