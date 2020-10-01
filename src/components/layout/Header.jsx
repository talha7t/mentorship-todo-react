import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <header style={headerStyle}>
        <h1>TodoList</h1>
        <div>
          {" "}
          <Link style={linkStyle} to="/">
            Home
          </Link>{" "}
          |
          <Link style={linkStyle} to="/about">
            About
          </Link>
        </div>
      </header>
    </div>
  );
}

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
  margin: "0 1rem ",
};

const headerStyle = {
  background: "#333",
  color: "#fff",
  padding: "1rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

export default Header;
