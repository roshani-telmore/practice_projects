import React from "react";

function FlexBoxNinePage() {
  return (
    <div className="FlexBoxNinePage">
      <div className="header">
        <div className="logo">Decorative</div>
        <div className="logo">Decorative</div>
      </div>
      <div className="content">
        <div className="parking-img">
          <img src="/images/flex-box-9-img-1.png" />
        </div>
        <div className="paragraph">
          <p>
            By all means marry; if you get a good wife, you'll become happy; if
            you get a bad one, you'll become a philosopher.
          </p>
        </div>
      </div>
      <div className="footer">
        <div className="footer-left-side">
          <div className="text-1">Decorative Texts</div>
          <div className="text-2">Other Decorative Texts </div>
          <div className="heading">Heading.</div>
        </div>
        <div className="footer-right-side">
          {/* <img
            class="reponsive-img"
            src="/images/flex-box-9-img-2.png"
            alt="image"
          /> */}
          <div className="beach-img">
            <img src="/images/flex-box-9-img-2.png" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlexBoxNinePage;
