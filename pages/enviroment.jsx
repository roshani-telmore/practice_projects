import FBLogo from "components/enviroment/fb-logo";
import HamburgerIcon from "components/enviroment/hamburger-icon";
import InstaLogo from "components/enviroment/insta-logo";
import TwitLogo from "components/enviroment/twit-logo";
import WorldLogo from "components/enviroment/wold-logo";
import React, { useState } from "react";

const RecycleInfo = ({ info }) => {
  return (
    <div className="recycle-info">
      <div className="features">
        <div className="image">
          <img
            clasName="responsive-img "
            src={info.imageUrl}
            alt={info.title}
          />
        </div>
        <div className="recycle-title">{info.title} </div>
        <div className="recycle-details ">
          <p>{info.details}</p>
        </div>
      </div>
    </div>
  );
};

function Enviroment({ children }) {
  const recyclelist = [
    {
      imageUrl: "/images/travel-go-green.png",
      title: "Recycle",
      details:
        "When you put the whole picture together, recycling is the right thing to do",
    },
    {
      imageUrl: "/images/travel-world.png",
      title: "Recycle",
      details:
        "Everybody wants a better world to live in. Let's make it happen.",
    },
    {
      imageUrl: "/images/travel-electric-car.png",
      title: "Friendly Cars",
      details:
        "The time is right for electric cars. Electric cars are the future.",
    },
  ];

  return (
    <div className="enviroment-page-wrap">
      <div className="header-wrap">
        <div className="header-menu">
          <WorldLogo />

          <div className="button">
            <div className="register">
              <a href="#">Register</a>
            </div>
            <div className="sing-in">
              <a href="#">Sign In</a>
            </div>
          </div>
        </div>
        <div className="header-para">
          <div className="para">
            <h1>Lets Make The</h1>
            <h1>World</h1>
            <h1>A Better Place</h1>

            <p>
              Have you ever wondered how you can make the world a better place?
              Here's a reminder that YOU matter and that it's the small things
              that count.
            </p>
          </div>
          <div className="your-img">
            <img className="responsive-img" src="/images/enviroment-your.png" />
          </div>
        </div>
      </div>

      <div className="content">
        {recyclelist.map((t, index) => {
          return <RecycleInfo info={t} key={`ti-${index.toString}`} />;
        })}
      </div>

      <div className="footer-wrap">
        {/* <div className="footer"> */}
        <div className="footer-logo">
          <div className="logo">
            <WorldLogo />
          </div>
          <div className="blog">
            <span>Blog </span>
            <span> Sed Feedback </span>
            <span> Dummy Link </span>
            <span> About </span>
            <span> Help</span>
          </div>
          <div className="media-icon">
            <span>
              <a href="#">
                <FBLogo />
              </a>
            </span>
            <span>
              <a href="#">
                <InstaLogo />
              </a>
            </span>
            <a href="#">
              <TwitLogo />
            </a>
          </div>
        </div>
        <div className=" terms-privacy">
          <span>©2021 Dummy Terms Privacy</span>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}

export default Enviroment;
