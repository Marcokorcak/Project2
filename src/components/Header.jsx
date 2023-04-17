import { NavLink as RouterLink } from "react-router-dom";
import Container from "./Container";
import React from "react";
import logo from "../images/logo.png"

const Header = () => {
  const getClassName = (props) => {
    return `${
      props.isActive ? "font-bold" : ""
    } hover:underline hover:scale-150 transition duration-300 `;
  };

  return (
    <Container className="bg-indigo-600">
      <nav className="flex gap-4">
        <img src={logo} />
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
