import React from "react";

function TestPage() {
  return (
    <div className="test-page">
      <div className="box-wrapper">
        <div className="box">box 1</div>
        <div className="box">box 2</div>
        <div className="box">box 3</div>
      </div>
      <div>
        <article className="margin-collapse">
          <h1>My heading with teal margin</h1>
          <p>
            A paragraph of text that has blue margin on it, following the
            heading with margin.
          </p>
        </article>
      </div>
      <div className="flex-grow-demo">
        <div className="parent">
          <div className="child">
            <img
              src="/images/flex-box-9-img-1.png"
              className=""
            />
          </div>
          <div className="child">dfdsfdsf</div>
        </div>
        <div className="parent">
          <div className="child">dfsdfdsf</div>
          <div className="child">
            <img
              src="/images/flex-box-9-img-2.png"
              className=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestPage;
