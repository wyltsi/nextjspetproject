import * as React from "react";
import { BsHourglassSplit } from "react-icons/bs";

export default function Spinner() {
  const spinnerContainer: any = {
    display: "flex",
    flexDirection: "column",
    margin: "1rem auto",
    alignItems: "center",
    padding: "20px 0",
    color: "#F0544F",
  };

  const spinStyle: any = {
    animation: "spin-animation 2s infinite linear",
  };

  return (
    <div className="container" style={spinnerContainer}>
      <BsHourglassSplit style={spinStyle} />
      Loading
    </div>
  );
}
