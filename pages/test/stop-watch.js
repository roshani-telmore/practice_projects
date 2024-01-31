import React, { useState } from "react";

function Test() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const start = () => {
    return setInterval(() => {
      // setSeconds(seconds++)
      for (let seconds = 0; seconds <= 59; seconds++) {
        console.log(seconds);
       
      }
    }, 10000);
  };
  function resetTimer() {}
  function stopTimer() {}

  return (
    <div className="windowshell">
      <div className="outershell">
        <div className="timerscreen" id="timerscreen">
          <label>Stop Watch</label>

          <div>
            <label className="timer" id="timers">
              {hours}
            </label>
            <label className="timer" id="timers">
              {minutes}
            </label>
            <label className="timer milli" id="timers">
              {seconds}
            </label>
          </div>

          <div className="buttonholder">
            <button className="reset" onClick={start}>
              Start
            </button>
            <button
              className="reset"
              onClick={() => {
                stopTimer;
              }}
            >
              Stop
            </button>
            <button
              className="reset"
              onClick={() => {
                resetTimer;
              }}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Test;
