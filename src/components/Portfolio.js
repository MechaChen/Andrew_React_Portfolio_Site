import React from "react";
import { NavLink } from "react-router-dom";

const Portfolio = () => (
  <React.Fragment>
    <h1>My Work</h1>
    <p>Welcome to my work lobby. These are all my Heart and Blood.</p>
    <ol>
      <li>
        <NavLink to="/portfolio/1">BPuni</NavLink>
      </li>
      <li>
        <NavLink to="/portfolio/2">Collect Squid</NavLink>
      </li>
    </ol>
  </React.Fragment>
);

export default Portfolio;
