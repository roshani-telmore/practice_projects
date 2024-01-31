import React from "react";

function FlexBoxTwoPage() {
  return (
    <div className="flex-box-second-page">
      {/* FlexBoxTwoPage */}
      <div className="box-1">
        <div className="text-1">Decorative</div>
        <div className="text-2">Decorative</div>
      </div>
      <div className="box-2">
        <div className="inside-box-2">
          <div className="title-img">
            <img src="/images/flex-box-2-img-1.png" />
          </div>
          <div className="img-info">
            <p>
              Prefer knowledge to wealth, for the one is transitory, the other
              perpetual.
            </p>
          </div>
          <div className="deco">
            <img src="/images/flex-box-2-img-2.png" />
          </div>
        </div>
        <div className="box-3">
          <div className="inside-box-3">
            <div className="title">
              <span>Heading 2</span>
            </div>
            <div className="paragraph">
              <p>
                The hour of departure has arrived, and we go our separate ways,
                I to die, and you to live. Which of these two is better only God
                knows.
              </p>
            </div>
          </div>
          <div className="box-4">
            <div className="black-img">
              <img src="/images/flex-box-2-img-3.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlexBoxTwoPage;
