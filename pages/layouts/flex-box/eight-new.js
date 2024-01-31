import React from "react";

function Layout08Page() {
  return (
    <div className="flexbox-08-responsive-page">
      <div className="header">
        <div className="logo-text">
          <p>Decorative</p>
        </div>
        <div className="logo-text">
          <p>Decorative</p>
        </div>
      </div>
      <div className="content-wrapper">
        <div className="left-side">
          <img
            class="reponsive-img"
            src="/images/flex-box-8-img-1.png"
            alt="image"
          />
        </div>
        <div className="right-side">
          <div className="upper-side">
            <div className="heading">
              <span>Heading 2_</span>
            </div>
            <div className="text-image-holder">
              <div className="para-wrapper">
                <p>
                  The hour of departure has arrived, and we go our separate
                  ways, I to die, and you to live. Which of these two is better
                  only God knows.
                </p>
              </div>
              <img
                class="reponsive-img"
                src="/images/flex-box-8-img-3.png"
                alt="image"
              />
            </div>
          </div>
          <div className="lower-side">
            <div className="side-left">
              <span className="number">01.</span>
              <span className="text">
                Prefer knowledge to wealth, for the one is transitory, the other
                perpetual.
              </span>
            </div>
            <div className="side-right">
              <span className="number">02.</span>
              <span className="text">
                We cannot live better than in seeking to become better.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout08Page;
