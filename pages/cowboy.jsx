import AppStoreLogo from "components/cowboy/app-store-logo";
import DropCloseLogo from "components/cowboy/drop-close-logo";
import DropDownArrow from "components/cowboy/drop-down-arrow";
import ElectricBikeLogo from "components/cowboy/electric-bike-logo";
import GooglePayLogo from "components/cowboy/google-pay-logo";
import Header from "components/cowboy/header";
import StopLogoIcon from "components/cowboy/stop-logo-icon";
import UnicodeSvg from "components/cowboy/unicode-svg";

import React, { useState } from "react";
const KeyInfo = ({ info }) => {
  return (
    <div className="key-info">
      {/* <div className="features"> */}
      <div className="image">
        <img src={info.imageUrl} alt={info.title} />
      </div>
      <div className="key-title">{info.title} </div>
      <div className="key-details ">
        <p>{info.details}</p>
      </div>
      {/* </div> */}
    </div>
  );
};

function Cowboy() {
  const keylist = [
    {
      imageUrl: "/images/cowboy-map.png",
      title: "Auto Unlock",
      details: "The app senses when you're nearby to unlock automatically.",
    },
    {
      imageUrl: "/images/cowboy-break.png",
      title: " Hydraulic disc brakes",
      details: " Brakes with total stopping power the second you make contact.",
    },
    {
      imageUrl: "/images/cowboy-tire.png",
      title: "Resilient Tires ",
      details:
        "All-rounder tires with flexible grip and a puncture-resistant layer. ",
    },
    {
      imageUrl: "/images/cowboy-tire.png",
      title: "Resilient Tires ",
      details:
        "All-rounder tires with flexible grip and a puncture-resistant layer. ",
    },
    {
      imageUrl: "/images/cowboy-tire.png",
      title: "Resilient Tires ",
      details:
        "All-rounder tires with flexible grip and a puncture-resistant layer. ",
    },
  ];

  const [sections, setSections] = useState({
    specs: false,
    bike: false,
    electro: false,
  });

  const handleDropDown = (e, type) => {
    e.preventDefault();
    setSections({ ...sections, [type]: !sections[type] });
  };

  return (
    <div className="cowboy-page">
      <div className="header-wrapper">
        <Header />
        <div className="header-img">
          <div className="dream-machine-wrap">
            <p>COWBOY 4</p>
            <h1>Dream Machine</h1>
            <span>
              <StopLogoIcon />
              Select in action
            </span>
          </div>
        </div>
      </div>

      <div className="electric-bike-wrap">
        <div className="electric-bike-para">
          <h1>Electric bike remagined</h1>
          <p>
            Find your pace at the edge of the urban frontier for a new path
            forward.
          </p>
          <div className="electric-btn">
            <div className="order-btn">
              <button type="button">
                <a href="#">Order now</a>
              </button>
            </div>
            <div className="amount-text">
              <h1>From $2,190 $2,190</h1>
              <p>Discounts available</p>
            </div>
          </div>
        </div>

        <div className="electric-bike-img">
          <ElectricBikeLogo />
        </div>
      </div>

      <div className="key-info-wrapper">
        <h1>Key features</h1>
        <div className="feature">
          {keylist.map((t, index) => {
            return <KeyInfo info={t} key={`ti-${index.toString()}`} />;
          })}
        </div>
      </div>

      <div className="ride-awake-wrap">
        <h1>Ride Awake</h1>

        <div className="ride-awake-para">
          <p>
            With your phone docked in sight, your bike becomes an all-knowing
            companion. Connected to your every move and on the lookout for
            what's ahead, now's your chance to wander and wonder.
          </p>
          <p>
            Your next ride is no longer a question of if or when. Rather, where
            to? A swift first kick powers the speed you need for an active ride
            and an easy climb.
          </p>
        </div>

        <div className="ride-img-backgrd">
          <div className="ride-start-wrap">
            <div className="ride-start">
              <h1>Ride stats</h1>
              <p>
                With a constant ally tuned into the road, it will keep you
                moving well informed.
              </p>
            </div>
            <div className="svg">
              <AppStoreLogo />
              <GooglePayLogo />
            </div>
          </div>
        </div>
      </div>

      <div className="customer-speak-wrap">
        <h1>Our castomers speak</h1>

        <div className="speak">
          <div className="speak-para">
            <span>
              <UnicodeSvg />
            </span>
            <p>
              Problems with my beltchain and I discovered a sound on my
              frontwheel…the bolt on my frontwheel was almost loose so my
              frontwheel was loose and the disk of my brakes and the brake
              paddles Where making this nose…very dangerous…luckily I discovered
              the problem on time
            </p>
          </div>
          <div className="customer-id-wrap">
            <div className="customer-id active">
              <img src="/images/cowboy-walker.png" />
              <div className="name">
                <h2>Jesse Walker</h2>
                <span>Professional rider</span>
              </div>
            </div>

            <div className="customer-id ">
              <img src="/images/cowboy-1.png" />
              <div className="name">
                <h2>Jesse Walker</h2>
                <span>Professional rider</span>
              </div>
            </div>
            <div className="customer-id ">
              <img src="/images/cowboy-2.png" />
              <div className="name">
                <h2>Jesse Walker</h2>
                <span>Professional rider</span>
              </div>
            </div>
            <div className="customer-id ">
              <img src="/images/cowboy-3.png" />
              <div className="name">
                <h2>Jesse Walker</h2>
                <span>Professional rider</span>
              </div>
            </div>

            {/* <div className="customer">
              <img src="/images/cowboy-1.png" />
              <img className="person" src="/images/cowboy-2.png" />
              <img className="person" src="/images/cowboy-3.png" />
            </div> */}
          </div>
        </div>

        <h1>Our castomers speak</h1>
      </div>

      <div className="key-specification-wrap">
        <div className="key-specification">
          <div className="key-text">
            <p>key specification</p>
            <span>16</span>
          </div>
          <a
            href="#"
            className="drop-down-svg"
            onClick={(e) => handleDropDown(e, "specs")}
          >
            {sections.specs && <DropDownArrow />}
            {sections.specs === false && (
              <span>
                <DropCloseLogo />
              </span>
            )}
          </a>
        </div>

        {sections.specs && (
          <div className="data-wrap">
            <div className="data">
              <div className="divider"></div>
              <div className="price">
                <h1>Price</h1>
                <h2>$ 2,190</h2>
              </div>
              <div className="divider"></div>
              <div className="colors">
                <h1>Colors</h1>
                <h2>Black</h2>
              </div>
              <div className="divider"></div>
              <div className="Abouth">
                <h1>Abouth</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Rutrum consequat risus est sed nulla sed. Ultrices imperdiet
                  fringilla elit eu vitae nunc elementum sagittis.
                </p>
              </div>
              <div className="divider"></div>
              <div className="price">
                <h1>Price</h1>
                <h2>$ 2,190</h2>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="bike-wrap">
        <div className="bike">
          <div className="bike-text">
            <p>Bike</p>
            <span>8</span>
          </div>

          <div className="drop-down-svg">
            <a
              href="#"
              className="drop-down-svg"
              onClick={(e) => handleDropDown(e, "bike")}
            >
              {sections.bike && <DropDownArrow />}
              {sections.bike === false && (
                <span>
                  <DropCloseLogo />
                </span>
              )}
            </a>
          </div>
          
        </div>

        {sections.bike && (
          <div className="data-wrap">
            <div className="data">
              <div className="divider"></div>
              <div className="price">
                <h1>Price</h1>
                <h2>$ 2,190</h2>
              </div>
              <div className="divider"></div>
              <div className="colors">
                <h1>Colors</h1>
                <h2>Black</h2>
              </div>
              <div className="divider"></div>
              <div className="Abouth">
                <h1>Abouth</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Rutrum consequat risus est sed nulla sed. Ultrices imperdiet
                  fringilla elit eu vitae nunc elementum sagittis.
                </p>
              </div>
              <div className="divider"></div>
              <div className="price">
                <h1>Price</h1>
                <h2>$ 2,190</h2>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="electronics-wrap">
        <div className="electronics">
          <div className="electronics-text">
            <p>Electronics</p>
            <span>5</span>
          </div>
          <div className="drop-down-svg">
            <a
              href="#"
              className="drop-down-svg"
              onClick={(e) => handleDropDown(e, "electro")}
            >
              {sections.electro && <DropDownArrow />}
              {sections.electro === false && (
                <span>
                  <DropCloseLogo />
                </span>
              )}
            </a>
          </div>
        </div>
        {sections.electro && (
          <div className="data-wrap">
            <div className="data">
              <div className="divider"></div>
              <div className="price">
                <h1>Price</h1>
                <h2>$ 2,190</h2>
              </div>
              <div className="divider"></div>
              <div className="colors">
                <h1>Colors</h1>
                <h2>Black</h2>
              </div>
              <div className="divider"></div>
              <div className="Abouth">
                <h1>Abouth</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Rutrum consequat risus est sed nulla sed. Ultrices imperdiet
                  fringilla elit eu vitae nunc elementum sagittis.
                </p>
              </div>
              <div className="divider"></div>
              <div className="price">
                <h1>Price</h1>
                <h2>$ 2,190</h2>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="mount-up-wrap">
        <div className="mount-up">
          <p>COWBOY 4</p>
          <h1>Mount up, ride on.</h1>
          <span>
            <button type="button">
              <a href="#"> Order now</a>
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Cowboy;
