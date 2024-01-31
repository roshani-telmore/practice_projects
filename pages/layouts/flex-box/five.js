import React from "react";

function FlexBoxFivePage() {
  return (
    <div className="">
      <div className="flex-box-five-page">
        <div className="head">
          <div className="text-1">Decorative</div>
          <div className="text-2">Decorative</div>
        </div>
        <div className="content">
          <div className="left-side-box">
            <div className="heading-1">Heading 2_</div>
            <div className="paragraph">
              The hour of departure has arrived, and we go our separate ways, I
              to die, and you to live. Which of these two is better only God
              knows.
            </div>
          </div>
          <div className="right-side-box">
            <div className="img">
              <img src="/images/flex-box-5-img.png" />
            </div>
            <div className="inside-right-side-box">
              <div className="heading-2">Heading 3_</div>
              <div className="points">
                <div className="point-1">
                  <span>01.</span>
                  <p>
                    Prefer knowledge to wealth, for the one is transitory, the
                    other perpetual.
                  </p>
                </div>
                <div className="point-2">
                 <span>02.</span><p>We cannot live better than in seeking to become better.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlexBoxFivePage;
