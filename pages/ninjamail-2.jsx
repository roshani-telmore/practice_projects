import React from "react";

import NinjaMailLogo from "components/ninja-mail/ninja-mail-logo";

const CaseStudyInfo = ({ study }) => {
  return (
    <div className="case-study-info">
      <div
        className="study-img"
        style={{ backgroundImage: `url(${study.backgroundUrl})` }}
      >
        <div className="info">
          <div className="name">{study.name}</div>
          <div className="year">{study.year}</div>
        </div>
      </div>
    </div>
  );
};

function Ninjamail2() {
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
    <div className="ninja-mail-page-2">
      <div className="header">
        <div className="logo">
          {/* <NinjaMailLogo width={160} height={40} /> */}
          <NinjaMailLogo className="logo-image" />
        </div>
        <div className="links">
          <ul className="menu-links">
            <li>
              <a href="#">FEATURES</a>
            </li>
            <li>
              <a href="#">PRICING</a>
            </li>
            <li>
              <a href="#">SERVICES</a>
            </li>
            <li>
              <a href="#">PARTNERS</a>
            </li>
          </ul>
          <div className="sign-up-link">
            <a href="#" className="btn">
              SIGN UP FREE
            </a>
          </div>
        </div>
      </div>
      <div className="hero-section">
        <div className="create-email-para">
          <h1>Create Stunning Email Campaigns</h1>
          <div>
            <p>
              Create and launch email campaigns that captivate your customers in
              just a few clicks.
            </p>
            <div className="try-now-btn">
              <a className="btn btn-primary" href="#">
                TRY NOW
              </a>

              <a className="btn btn-secodory" href="#">
                GET A DEMO
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="video-wrap">
        <div className="video-bckgrd">
          <div className="video-para">
            <h1>Reach More Customers</h1>
            <a href="#" className=" btn-learn-how">
              LEARN HOW
            </a>
          </div>
        </div>
      </div>

      <div className="sec3-wrap">
        <div className="background"></div>
        <div className="sec3">
          <div className="thumb1-wrap">
            <img src="/images/ninjamail-thumb1.png" />
            <p>
              Launch campaigns but also find new customers. Our unique platform
              handles campaigns from start to end.
            </p>
            <span>Learn More {">"} </span>
          </div>

          <div className="thumb2-wrap">
            <img src="/images/ninjamail-thumb2.png" />
            <p>
              Start building and sharing with your team today. NinjaMail is
              renowned for its industry leading team collaboration tools.
            </p>
            <span>Learn More {">"}</span>
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
          <div className="email">
            <form>
              <input
                type="text"
                id="nametext"
                name="text"
                placeholder="Enter your email"
              />
            </form>

            <div className="thanks">Thanks! Email received.</div>
          </div>
          <div className="join-btn">
            <button>JOIN OUR LIST</button>
          </div>
        </div>
      </div>

      <div className="sec5-wrap">
        <div className="sec5-title">All the best brands already use us.</div>

        <div className="logos">
          <div className="logo-1">
            <img src="/images/ninjamail-logo1.png" />
          </div>
          <div className="logo-2">
            <img src="/images/ninjamail-logo2.png" />
          </div>

          <img className="logo-3" src="/images/ninjamail-logo3.png" />

          <div className="logo-4">
            <img src="/images/ninjamail-logo4.png" />
          </div>
          <img className="logo-5" src="/images/ninjamail-logo5.png" />
        </div>
      </div>

      <div className="get-started">
        <h3>Get started today!</h3>
        <a className="btn btn-pick-plan" href="#">
          PICK A PLAN
        </a>
      </div>

      <div className="footer-logo-wrap">
        <NinjaMailLogo width={197.39} height={60.23} />

        <div className="footer-links">
          <div className="footer-link-a">
            <ul className="footer-link-a1">
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Partners</a>
              </li>
            </ul>

            <ul className="footer-link-a2">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Tutorials</a>
              </li>
              <li>
                <a href="#">Resources</a>
              </li>
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">Templates</a>
              </li>
              <li>
                <a href="#">Case Studies</a>
              </li>
            </ul>
          </div>

          <div className="footer-link-b">
            <ul className="footer-link-b1">
              <li>
                <a href="#">Medium</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">LinkedIn</a>
              </li>
            </ul>

            <ul className="footer-link-b2">
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Slack</a>
              </li>
              <li>
                <a href="#">Jobs</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      
      <div className="footer-terms-wrap">
        <div className="divider"></div>
        <div className="footer-terms">
          <p>
            NinjaMail is a sample project for Quest AI. © 2019 Quest AI, All
            rights reserved.
          </p>
          <div className="terms-condition">
            <span>Terms & Conditions</span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ninjamail2;
