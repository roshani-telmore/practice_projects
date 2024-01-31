import React from "react";

function FlexBoxSixPage() {
  return (
    <div className="Flex-Box-Six-Page">
      <div className="head">
        <div className="text-1">Decorative</div>
        <div className="text-2">Decorative</div>
      </div>
      <div className="content">
        <div className="left-side">
          <div className="paragraph">
            <p>By all means marry; if you get a good wife,</p>
            <p>you’ll become happy; if you get a bad one,</p>
            <p> you’ll become a philosopher.</p>
          </div>
          <div className="inside-left-side">
            <div className="img-1">
              <img src="/images/flex-box-6-img-1.png" />
            </div>
            <div className="img-2">
              <img src="/images/flex-box-6-img-2.png" />
            </div>
          </div>
        </div>
        <div className="right-side">
          <div className="inside-right-side-1">
            <div className="info">
              <div className="info-1">Decorative Texts</div>
              <div className="info-2">Other Decorative Texts</div>
            </div>
            <div className="heading">Heading 2_</div>
          </div>
          <div className="inside-right-side-2">
            <div className="img-3">
              <img src="/images/flex-box-6-img-3.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlexBoxSixPage;
