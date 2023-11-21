import React, { useState } from "react";

import "./index.css";
import { Link, NavLink } from "react-router-dom";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/" className="title">
        Agência
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/packages">PACKAGES</NavLink>
        </li>
        <li>
          <NavLink to="/accommodations">ACCOMMODATIONS</NavLink>
        </li>
        <li>
          <NavLink to="/employees">EMPLOYEES</NavLink>
        </li>
        <li>
          <NavLink to="/clients">CLIENTS</NavLink>
        </li>
        <li>
          <NavLink to="/tickets">TICKETS</NavLink>
        </li>
        <li>
          <NavLink to="/Admin">ADMIN</NavLink>
        </li>
        <li>
          <NavLink to="/Consults">CONSULTS</NavLink>
        </li>
        
        
      </ul>
    </nav>
  );
};