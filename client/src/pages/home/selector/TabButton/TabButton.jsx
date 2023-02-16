import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import "./styles.css";

export default function TabButton(props) {
  return (
    <>
      <Button
        className={props.checked ? "TabButton active" : "TabButton"}
        onClick={props.onClick}
      >
        {props.title}
      </Button>
    </>
  );
}
