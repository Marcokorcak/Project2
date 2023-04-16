import { NavLink as RouterLink } from "react-router-dom";
import Container from "./container";
import React from "react";

const Header = () => {
  const getClassName = (props) => {
    return `${
      props.isActive ? "font-bold" : ""
    } hover:underline hover:scale-150 transition duration-300 `;
  };

  return (
    <Container className="bg-teal-300">
      <nav className="flex gap-4">
        <RouterLink className={getClassName} to="/">
          Home
        </RouterLink>
        <RouterLink className={getClassName} to="/create">
          Create
        </RouterLink>
      </nav>
    </Container>
  );
};

export default Header;
