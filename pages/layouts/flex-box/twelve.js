import React from "react";

function FlexBoxTwelvePage() {
  return (
    <div className="FlexBoxTwelvePage">
      <div className="header">
        <div className="logo">Decorative</div>
        <div className="logo">Decorative</div>
      </div>
      <div className="content">
        <div className="heading">Heading.</div>
        <div className="para">
          By all means marry; if you get a good wife,
          <br /> you'll become happy; if you get a bad one,
          <br /> you'll become a philosopher.
        </div>
      </div>
      <div className="line-img">
      <img
            class="reponsive-img"
            src="/images/flex-box-12-img-1.png"
            alt="image"
          />
         {/* <img src="/images/flex-box-12-img-1.png" /> */}
      </div>
      <div className="footer">
        <div className="logo-text">Decorative</div>
        <div className="logo-text">Decorative</div>
      </div>
    </div>
  );
}

export default FlexBoxTwelvePage;
