import React from "react";
import PropTypes from "prop-types";

const Button = ({
  children,
  btnClass = "primary",
  type = "button",
  ...props
}) => {
  return (
    <button className={`btn btn-${btnClass}`} type={type} {...props}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  btnClass: PropTypes.string,
  type: PropTypes.string,
};

export default Button;
