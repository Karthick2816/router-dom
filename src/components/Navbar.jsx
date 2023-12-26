import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <ul className="nav justify-content-center">
      <li className="nav-item">
        <b>
          {" "}
          <Link
            to="/all"
            className="nav-link active"
            aria-current="page"
            href="#"
          >
            All
          </Link>
        </b>
      </li>
      <li className="nav-item">
        <b>
          <Link to="/fullstack" className="nav-link" href="#">
            Fullstack Devlopment
          </Link>
        </b>
      </li>
      <li className="nav-item">
        <b>
          {" "}
          <Link to="/datascience" className="nav-link" href="#">
            Data Science
          </Link>
        </b>
      </li>
      <li className="nav-item">
        <b>
          {" "}
          <Link to="/career" className="nav-link" href="#">
            Career
          </Link>
        </b>
      </li>
      <li className="nav-item">
        <Link to="/datascience" className="nav-link" href="#"></Link>
      </li>
      <li className="nav-item">
        <b>
          <Link to="/cyber" className="nav-link" href="#">
            Cyber Security
          </Link>
        </b>
      </li>
    </ul>
  );
}

export default Navbar;
