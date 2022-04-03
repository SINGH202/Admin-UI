import React from "react";
import "./styles.css"

export const Footer = () => {
  return (
    <div className="buttonDiv">
      <button className="deleteBtn">Delete Selected</button>
      <div className="circularBtnDiv">
      <button className="circularBtn">{"<< "}</button>
      <button className="circularBtn">{"<"}</button>
      <button className="circularBtn">1</button>
      <button className="circularBtn">2</button>
      <button className="circularBtn">3</button>
      <button className="circularBtn">4</button>
      <button className="circularBtn">5</button>
      <button className="circularBtn">{">"}</button>
      <button className="circularBtn">{">>"}</button>
      </div>
    </div>
  );
};
