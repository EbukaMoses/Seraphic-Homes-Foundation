import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ title, url, style, onClick, icon}) => {
  return (
    <Link to={url} className={style} onClick={onClick}>
      {title} {icon && icon}
    </Link>
  );
};

export default Button