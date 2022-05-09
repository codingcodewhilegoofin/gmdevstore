import React from 'react';
import '../Buttons/Button.css';
import { Link } from 'react-router-dom';


const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    
    <a href="https://github.com/codingcodewhilegoofin/giowebsite" className={`btn ${checkButtonStyle} ${checkButtonSize}`} download="">
      <img  alt="Giovanni Moscato Resume 📝"/>
    </a>
  );
};