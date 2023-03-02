import React from "react";
import logo from "../../assets/logo.svg";
import cart from "../../assets/icon-cart.svg";
import avatar from "../../assets/image-avatar.png";
import { motion } from "framer-motion";

const NavBar = () => {
  return (
    <div className="container">
      <nav>
        <div>
          <a href="/">
            <img src={logo} alt="sneakers" />
          </a>
        </div>
        <div>
          <ul role="list">
            <li>
              <a href="/">Collections</a>
            </li>
            <li>
              <a href="/">Men</a>
            </li>
            <li>
              <a href="/">Women</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </div>
        <div>
          <button>
            <img src={cart} alt="" />
          </button>
          <a href="/">
            <img src={avatar} alt="" />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
