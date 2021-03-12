import React from 'react';
import '../Buttons/Button.css';
import { Link } from 'react-router-dom';
import '../Resume/Giovanni J Moscato.pdf';

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
    
    <a href="C:\Users\Yupim\Desktop\giomoscatoweb\src\components\Resume\Giovanni J Moscato.pdf" className={`btn ${checkButtonStyle} ${checkButtonSize}`} download="GioMoscatoResume.pdf">
      <img src="C:\Users\Yupim\Desktop\giomoscatoweb\src\components\Resume\Giovanni J Moscato.pdf" alt="Giovanni Moscato Resume 📝"/>
    </a>
  );
};