import FaceBookIcon from "components/travello-travel-agency/facebook-icon";
import InstagramIcon from "components/travello-travel-agency/instagram-icon";
import RandomLogoIcon from "components/travello-travel-agency/random-logo-icon";
import SocialMediaIcon from "components/travello-travel-agency/social-media-icon";
import TwitterIcon from "components/travello-travel-agency/twitter-icon";
import VectorIcon from "components/travello-travel-agency/vector-icon";
import YouTubeIcon from "components/travello-travel-agency/youtube-icon";
import React, { useState } from "react";

const PackageInfo = ({ info }) => {
  return (
    <div className="package-info">
      <div className="features">
        <div className="image">
          <img src={info.imageUrl} alt={info.title} />
        </div>
        <div className="package-title">{info.title} </div>
        <div className="package-details ">
          <p>{info.details}</p>
        </div>
      </div>
    </div>
  );
};
const ExploreInfo = ({ country }) => {
  return (
    <div className="explore-info">
      <div
        className="country-img"
        style={{ backgroundImage: `url(${country.backgroundUrl})` }}
      >
        {/* <img src={country.backgroundUrl} alt={country.title} /> */}

        <div className="country-name">{country.title}</div>
        <div className="country-info">{country.detail}</div>
      </div>
    </div>
  );
};

function TravelloTravelAgency({ children }) {
  const packagelist = [
    {
      imageUrl: "/images/travel-passport-img.png",
      title: `Full Guide`,
      details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    },
    {
      imageUrl: "/images/travel-car-img.png",
      title: `Transport`,
      details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    },
    {
      imageUrl: "/images/travel-easy-book-img.png",
      title: `Easy Book`,
      details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    },
    {
      imageUrl: "/images/travel-camp-fire-img.png",
      title: `Camp Fire`,
      details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    },
  ];

  const explorelist = [
    {
      backgroundUrl: "/images/travel-roma-img.png",
      title: "Roma, Italia",
      detail:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      backgroundUrl: "/images/travel-jakarta-img.png",
      title: "Jakarta, Indonesia",
      detail:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      backgroundUrl: "/images/travel-bangkok.png",
      title: "Bangkok, Thailand",
      detail:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  return (
    <div className="travello-page-wrapper">
      <div className="header-wrap">
        <div className="hero-background"></div>
        <div className="header">
          <div className="logo">
            <RandomLogoIcon />
          </div>
          <div className="menu-wrap">
            <div className="menu">
              <h1>
                <a href="#">Home</a>
              </h1>
              <h1>
                <a href="#">About</a>
              </h1>
              <h1>
                <a href="#">Why us</a>
              </h1>
              <h1>
                <a href="#">Trips</a>
              </h1>
            </div>
            <div className="button-primary">
              <button type="button">
                <a href="#">Contact us</a>
              </button>
            </div>
          </div>
        </div>

        <div className="hero-section-wrap">
          <div className="hero-section">
            <div className="hero-section-title">
              <h1>Explore new places with travello</h1>
            </div>
            <div className="hero-section-para">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip.
              </p>
            </div>
            <div className="button-normal">
              <button type="button">
                <a href="#">Get started</a>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="content">
        <div className="overlap-img-wrap">
          <div className="overlap-img">
            <div className="water-fall-img">
              <img
                className="responsive-image"
                src="/images/travel-waterfall-img.png"
              />
            </div>
            <div className="mountain-img">
              <img
                className="responsive-image"
                src="/images/travel-mountain-img.png"
              />
            </div>
          </div>
          <div className="section-about-us">
            <div className="about-us">About us</div>
            <div className="explore-world-title">Explore world with us</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip.
            </p>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="content-button">
              <button type="button">
                <a href="#">Get started</a>
              </button>
              <div className="svg-vector">
                <VectorIcon />
              </div>
            </div>
          </div>
        </div>

        <div className="package-info-wrapper">
          {packagelist.map((t, index) => {
            return <PackageInfo info={t} key={`ti-${index.toString()}`} />;
          })}
        </div>

        <div className="explore-country-wrap">
          <div className="about-us">About Us</div>
          <div className="explore-world-title">Explore world with us</div>
          <div className="explore-country">
            {explorelist.map((t, index) => {
              return <ExploreInfo country={t} key={`ti-${index.toString}`} />;
            })}
          </div>
        </div>

        <div className="customer-review-wrap">
          <div className="customer-review">
            <span>What they say</span>
            <h1>Customer Reviews</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="review-button">
              <button type="button">
                <a href="#">All reviews</a>
              </button>
              <div className="vector-img">
                <VectorIcon />
              </div>
            </div>
          </div>
          <div className="customer-review-img">
            <img src="/images/travel-customer-review.png" />
          </div>
        </div>
      </div>
      <div className="footer-wrap">
        <div className="footer-explore-wrap">
          <div className="footer-explore">
            <span>About us</span>
            <h1>Explore world with us</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip.
            </p>
            <div className="footer-button">
              <button type="button">
                <a href="#">Get Started</a>
              </button>
              <div className="vector-arrow">
                <VectorIcon />
              </div>
            </div>
          </div>
        </div>
        <div className="footer-menu-wrap">
          <div className="footer-logo-wrap">
            <div className="footer-logo">
              <RandomLogoIcon />
            </div>
            <div className="learn-more-wrap">
              <h1>Learn More</h1>
              <span>About Lift</span>
              <span>Press Relaases</span>
              <span>Environment </span>
              <span>Jobs</span>
              <span>Privacy Policy</span>
              <span>Contact us</span>
            </div>
            <div className="tickets-booking-wrap">
              <h1>Tickets & Booking</h1>
              <span>Lift Tickets </span>
              <span> Season Passes </span>
              <span> Vacation Packages</span>
            </div>
            <div className="contact-us-wrap">
              <h1>Contact Us</h1>
              <div className="hotel-reserv">
                <span>Hotel Reservation:</span>
                <p>123-456-7890</p>
              </div>
              <div className="ticket-off">
                <span>Ticket Office:</span>
                <p>123-456-7890</p>
              </div>
            </div>
            <div className="social-wrap">
              <h1>Social</h1>
              <div className="icon">
                <div className="facebk">
                  <FaceBookIcon />
                </div>
                <div className="insta">
                  <InstagramIcon />
                </div>
                <div className="twit">
                  <TwitterIcon />
                </div>
                <div className="youtube">
                  <YouTubeIcon />
                </div>
              </div>
            </div>
          </div>
            <div className="divider"></div>
          <div className="rights-reserved">
            <span>© 2022 Travello | All Rights Reserved</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TravelloTravelAgency;
