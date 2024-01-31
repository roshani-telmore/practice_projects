import React from "react";
function FlexBoxOne() {
  return (
    <div className="flex-box-page">
      <div className="first-box">
        <div className="first-text">Decorative</div>
        <div className="second-text">Decorative</div>
      </div>
      <div className="second-box">
        <div className="inside-second-box-1">
          <div className="paragraph">
            <p>
              The hour of departure has arrived, and we go our separate ways, I
              to die, and you to live. Which of these two is better only God
              knows.
            </p>
          </div>
          <div className="img-1">
            <img src="/images/flex-box-1-img-1.png" />
          </div>
        </div>
        <div className="inside-second-box-2">
          <div className="inside-box-3">
            <div className="inside-box-img-2">
              <img src="/images/flex-box-1-img-2.png" />
            </div>
            <div className="inside-box-text-1">
              <span>Heading 3</span>
            </div>
          </div>
          <div className="inside-box-4">
            <div className="inside-box-text-2">
              <span> Heading 2</span>
            </div>
            <div className="inside-box-text-3">
              <span>Heading</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FlexBoxOne;
