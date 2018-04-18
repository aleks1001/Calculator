import React from "react";
import PropTypes from "prop-types";

const styles = {
  padding: "20px",
  border: "1px solid black",
  marginBottom: "2px",
  marginRight: "3px",
  minWidth: "45px"
};

const Button = ({ buttonText, handleClick }) => (
  <div
    onClick={() => {
      handleClick(buttonText);
    }}
    style={styles}
  >
    {buttonText}
  </div>
);

Button.propTypes = {
  buttonText: PropTypes.any,
  handleClick: PropTypes.func
};

export default Button;
