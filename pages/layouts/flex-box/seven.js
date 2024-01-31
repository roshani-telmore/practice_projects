import React from "react";

function FlexBoxSevenPage() {
  return (
    <div className="Flex-Box-Seven-Page">
      <div className="header">
        <div className="logo">Decorative</div>
        <div className="logo">Decorative</div>
      </div>
      <div className="content-wrapper">
        <div className="left-side">
          <div className="img-1">
            <img src="/images/flex-box-7-img-1.png" />
          </div>
          <div className="text-1">Decorative Texts</div>
          <div className="text-2"> Other Decorative Texts </div>
          <div className="heading-3">Heading 3_</div>
          <div className="img-2">
            <img src="/images/flex-box-2-img-2.png" />
          </div>
        </div>
        <div className="middle">
          <div className="heading-2">Heading 2_</div>
          <div className="paragraph">
            The hour of departure has arrived, and we go our separate ways, I to
            die, and you to live. Which of these two is better only God knows.{" "}
          </div>
        </div>
        <div className="right-side">
          <div className="img-3">
            <img src="/images/flex-box-7-img-2.png" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlexBoxSevenPage;
