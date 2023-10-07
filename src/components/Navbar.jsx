import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light" style={{position: 'fixed', top: '0', left: '0', width: '100%'}}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="ade.png" alt="" style={{ width: "50px" }} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Jokes
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/quiz" className="nav-link">
                  Quiz
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/dictionary" className="nav-link">
                  Dictionary
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/football-matches" className="nav-link">
                  Football Matches
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
