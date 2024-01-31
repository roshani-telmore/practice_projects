import React from "react";

function FlexBoxTwoNewPage() {
  return (
    <div className="FlexBoxTwoNewPage">
      <div className="header">
        <div className="text-1">Decorative</div>
        <div className="text-2">Decorative</div>
      </div>
      <div className="main">
        <div className="img-1">
          <img src="/images/flex-box-2-img-1.png" />
        </div>
        <div className="right-side-main">
          <div className="heading">Heading 2</div>
          <div className="passage">
            <p>
              The hour of departure has arrived, and we go our separate ways, I
              to die, and you to live. Which of these two is better only God
              knows.
            </p>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="left-side-footer">
          <div className="data">
            Prefer knowledge to wealth, for the one is transitory, the other
            perpetual.
          </div>
          <div className="rectangle">
            <img src="/images/flex-box-2-img-2.png" />
          </div>
        </div>
        <div className="right-side-footer">
          <div className="black-img">
            <img src="/images/flex-box-2-img-3.png" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlexBoxTwoNewPage;
