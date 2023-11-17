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
          <NavLink to="/packages">Packages</NavLink>
        </li>
        <li>
          <NavLink to="/accommodations">Accommodations</NavLink>
        </li>
        <li>
          <NavLink to="/employees">Employees</NavLink>
        </li>
        <li>
          <NavLink to="/clients">Clients</NavLink>
        </li>
        <li>
          <NavLink to="/tickets">Tickets</NavLink>
        </li>
        <li>
          <NavLink to="/Admin">Admin</NavLink>
        </li>
        <li>
          <NavLink to="/Consults">Consults</NavLink>
        </li>
        
        
      </ul>
    </nav>
  );
};