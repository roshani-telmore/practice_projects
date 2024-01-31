import React from "react";
import CowboyLogo from "./cowboy-logo";

function Header() {
  return (
    <div className="header-menu">
      <div className="header-content">
        <div className="logo">
          <CowboyLogo />
        </div>
        <div className="menu-wrap">
          <span>Overview</span>
          <span>Key featuers</span>
          <span>Ride awake</span>
          <span>Reviews</span>
          <span>Tech specs</span>
        </div>
      </div>

      <div className="header-order">
        <div className="amount-text">
          <h1>From $2,190 $2,190</h1>
          <p>Discounts available</p>
        </div>
        <div className="order-btn">
          <button type="button">
            <a href="#">Order now</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
