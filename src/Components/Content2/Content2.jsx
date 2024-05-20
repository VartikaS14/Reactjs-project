import React from "react";
import "./Content2.css";
import { Content } from "../../Components/Content/Content";
import Button from "../Button/Button";

const Content2 = () => {
  return (
    <div className="content2">
      <div className="content">
        <Content
          title="Experience the Rush today"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna "
        />
        <Button />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      </div>
    </div>
  );
};

export default Content2;
