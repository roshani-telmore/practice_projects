import React from "react";

function FlexBoxThreePage() {
  return (
    <div className="">
      <div className="flex-box-third-page">
        <div className="box-1">
          <div className="text-1">Decorative</div>
          <div className="text-2">Decorative</div>
        </div>
        <div className="box-2">
          <div className="insidebox-2">
            <div className="info-1">Decorative Texts</div>
            <div className="info-2">Other Decorative Texts</div>
            <div className="img-1">
              <img src="/images/flex-box-3-img-1.png" />
            </div>
          </div>
          <div className="rightside-box">
            <div className="rightside-1">
              <div className="inside-box-1">
                <div className="paragraph">
                  The hour of departure has arrived, and we go our separate
                  ways, I to die, and you to live. Which of these two is better
                  only God knows.
                </div>
                <div className="img-2">
                  <img src="/images/flex-box-2-img-2.png" />
                </div>
              </div>
              <div className="inside-box-2">
                <div className="img-3">
                  <img src="/images/flex-box-3-img-2.png" />
                </div>
              </div>
            </div>

            <div className="rightside-2">
              <div className="heading">Heading.</div>
              {/* <span>Heading.</span> */}
              {/* </div> */}
              <div className="points">
                <div className="point-1">
                  <span>01.</span>
                  <p>
                    Prefer knowledge to wealth, for the one is transitory, the
                    other perpetual.
                  </p>
                </div>
                <div className="point-2">
                  <span>02.</span>
                  <p>We cannot live better than in seeking to become better.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlexBoxThreePage;
