import React from "react";

function FlexBoxEightPage() {
  return (
    <div className="flexbox-08-page">
      <div className="header">
        <div className="logo-text">
          <p>Decorative</p>
        </div>
        <div className="logo-text">
          <p>Decorative</p>
        </div>
      </div>
      <div className="content-wrapper">
        <div className="content-main">
          <div className="left-side">
            <img className="img-1" src="/images/flex-box-8-img-1.png" />
          </div>
          <div className="right-side">
            <div className="upper-side">
              <div className="heading">
                <div className="heading-container">
                  <span>Heading 2_</span>
                </div>
              </div>

              <div className="description">
                <div className="paragraph">
                  <p>
                    The hour of departure has arrived, and we go our separate
                    ways, I to die, and you to live. Which of these two is
                    better only God knows.
                  </p>
                </div>
                <div className="mountain-img">
                  <img
                    className="mountain-img"
                    src="/images/flex-box-8-img-3.png"
                  />
                </div>
              </div>
            </div>
            <div className="lower-side">
              <div className="side-left">
                <span className="number">01.</span>
                <span className="text">
                  Prefer knowledge to wealth, for the one is transitory, the
                  other perpetual.
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
    </div>
  );
}

export default FlexBoxEightPage;
