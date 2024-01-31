import NinjaMailLogo from "components/ninja-mail/ninja-mail-logo";
import React, { useState } from "react";

const CaseStudyInfo = ({ study }) => {
  return (
    <div className="case-study-info">
      <div
        className="study-img"
        style={{ backgroundImage: `url(${study.backgroundUrl})` }}
      >
        {/* <img src={country.backgroundUrl} alt={country.title} /> */}
        <div className="info">
          <div className="name">{study.name}</div>
          <div className="year">{study.year}</div>
        </div>
      </div>
    </div>
  );
};

function NinjaMail() {
  const studylist = [
    {
      backgroundUrl: "/images/ninjamail-case1.png",
      name: "Frankie",
      year: "Member since 2016",
    },
    {
      backgroundUrl: "/images/ninjamail-case2.png",
      name: "Camile",
      year: "Member since 2012",
    },
    {
      backgroundUrl: "/images/ninjamail-case3.png",
      name: "Elayne",
      year: "Member since 2018",
    },
  ];

  return (
    <div className="ninja-mail-page">
      <div className="header-wrapper">
        <div className="header">
          <div className="logo">
            {/* <NinjaMailLogo width={160} height={40} /> */}
            <NinjaMailLogo className="logo-image"/>
          </div>
          <div className="links">
            <div className="menu-link">
              <span>
                <a href="#">FEATURES</a>
              </span>
              <span>
                <a href="#">PRICING</a>
              </span>
              <span>
                <a href="#">SERVICES</a>
              </span>
              <span>
                <a href="#">PARTNERS</a>
              </span>
            </div>
            <div className="sign-up-link">
              <button>
                <a href="#">SIGN UP FREE</a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="header-img">
        <div className="create-email-para">
          <h1>Create Stunning Email Campaigns</h1>
          <p>
            Create and launch email campaigns that captivate your customers in
            just a few clicks.
          </p>
          <div className="try-now-btn">
            <button className="try-now">
              <a href="#">TRY NOW</a>
            </button>
            <button className="get-demo">
              <a href="#">GET A DEMO</a>
            </button>
          </div>
        </div>
      </div>

      <div className="video-bckgrd">
        <div className="video-para">
          <h1>Reach More Customers</h1>
          <button id="learn-how">LEARN HOW</button>
        </div>
      </div>

      <div className="sec3-wrap">
        <div className="sec3">
          <div className="thumb1-wrap">
            <img src="/images/ninjamail-thumb1.png" />
            <p>
              Launch campaigns but also find new customers. Our unique platform
              handles campaigns from start to end.
            </p>
            <span>Learn More </span>
          </div>

          <div className="thumb2-wrap">
            <img src="/images/ninjamail-thumb2.png" />
            <p>
              Start building and sharing with your team today. NinjaMail is
              renowned for its industry leading team collaboration tools.
            </p>
            <span>Learn More </span>
          </div>

          <div className="sec3-para">
            <h1>The source for proven, engaging email campaigns</h1>
            <h2>
              Whether you're a startup, small business, e-commerce store, or
              want to promote your app, NinjaMail has the feature set tailored
              for your business.
            </h2>
          </div>
        </div>
      </div>

    
      <div className="case-wrap">
        {studylist.map((t, index) => {
          return <CaseStudyInfo study={t} key={`ti-${index.toString}`} />;
        })}
      </div>

      <div className="sec4-para">
        <h1>
          Learn how others are reaching their audience easier than ever before.
        </h1>

        <div className="email-wrap">
          <form>
            <input
              type="text"
              id="nametext"
              name="text"
              placeholder="Enter your email"
            />
          </form>

          <div className="join-btn">
            <button>JOIN OUR LIST</button>
          </div>
        </div>
        <div className="thanks">Thanks! Email received.</div>

      </div>

    

    </div>
  );
}

export default NinjaMail;
