import React from "react";
import { ThemeMode } from "./styledComponents/ThemeChanger.styled";
import { FaInnosoft } from "react-icons/fa";
import { BsSunFill, BsFillMoonFill } from "react-icons/bs";

const ThemeChanger = ({ setBodyTheme, bodytheme }) => {
  return (
    <ThemeMode>
      <FaInnosoft
        className="logo"
        />
      <div
        onClick={() => setBodyTheme(!bodytheme)}
        >
        {
          bodytheme ? (
            <BsSunFill className="themeIcon"/> 
            ): ( 
            <BsFillMoonFill className="themeIcon" />
            )
        }
      </div>
    </ThemeMode>
  );
};

export default ThemeChanger;
