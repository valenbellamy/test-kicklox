import React from "react";
import PropTypes from "prop-types";
import Button from "../../ui/Button";

const Navbar = ({ onButtonClick }) => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="navbar-brand">Test Kicklox</div>
        <div className="ml-auto">
          <Button onClick={onButtonClick} data-testid="openModal">
            Ajouter un message
          </Button>
        </div>
      </nav>
    </header>
  );
};

Navbar.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
};

export default Navbar;
