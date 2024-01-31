import React from "react";
import StarIcon from "./star-icon";

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <div className="logo-img">
          <img src="/images/agency-logo.svg" />
        </div>
        <div className="menu">
          <ul>
            <li>
              <a href="home">Home</a>
            </li>
            <li>
              <a href="about">About</a>
            </li>
            <li>
              <a href="sevices">Sevices</a>
            </li>
            <li>
              <a href="projects">Projects</a>
            </li>
          </ul>
        </div>
        <div className="contact">
          <a href="contact">Contact us</a>
        </div>
      </div>

      <div className="inside-header-wrapper">
        <div className="inside-header-1">
          <div className="bold-title">
            Make your dream
            <br /> business goal come true
          </div>
          <div className="msg">
            <p>
              when you need us for improve your business,
              <br /> then come with us to help your business have reach it, you
              just sit and feel that goal
            </p>
          </div>
          <div className="project-button">
            <a href="start project">Start Project</a>
          </div>
        </div>
        <div className="inside-header-2">
          
          <div className="great-project">
            <div className="inside-great-project">
              <div className="star">
                <StarIcon />
              </div>
              <div className="text-1">great project</div>
            </div>
            <div className="text-2">800+ Done</div>
          </div>

          <div className="study-img">
            <img src="/images/agency-inside-header-wrapper-1.png" />
          </div>

          <div className="bill adams">
            <div className="intro">
              <div className="photo">
              <img src="/images/agency-bill-adams.png" />
              </div>
              <div className="name">Bill Adams</div>
              <div className="post">CEO UpTech</div>
            </div>
            <div className="smg">
              “ This team is really the best in its field,I don't regret working
              with them, and will come back again thanks “
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
