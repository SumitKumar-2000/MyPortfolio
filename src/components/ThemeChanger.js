import React from 'react'
import { ThemeMode } from './styledComponents/ThemeChanger.styled'
import { FaInnosoft } from "react-icons/fa";

const ThemeChanger = ({setBodyTheme, bodytheme}) => {
  return (
    <ThemeMode>
        <><FaInnosoft onClick={()=>setBodyTheme(!bodytheme)} className="themeIcon"/></>
    </ThemeMode>
  )
}

export default ThemeChanger