import DropCloseLogo from "components/cowboy/drop-close-logo";
import DropDownArrow from "components/cowboy/drop-down-arrow";
import ArrowDown from "components/photography-event/arrow-down";
import PlusIcon from "components/photography-event/plus-icon";
import SavedIcon from "components/photography-event/saved-icon";
import UpArrow from "components/photography-event/up-arrow.component";
import React from "react";
import { useState } from "react";
function PhotographyEvent() {
  const [question, setQuestion] = React.useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setQuestion(value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    alert(question);
  };

  const [sections, setSections] = useState({
    que1: false,
    que2: false,
    que3: false,
    que4: false,
  });

  const handleDropDown = (e, type) => {
    e.preventDefault();
    setSections({ ...sections, [type]: !sections[type] });
  };

  return (
    <div className="photography-event-page">
      <div className="header">
        <div className="bg-img">
          <div className="header-img"></div>
        </div>

        <div className="header-contant">
          <div className="header-containt-left">
            <div className="photography-title">
              <h1>Photography Event </h1>
              <h2>by Jwish Patel</h2>
            </div>

            <div className="profile">
              <div className="pro">
                <img src="/images/Ellipse 8.png" />
                <h1>YourMoments</h1>
              </div>
              <span>posted 1 month ago</span>
            </div>

            <div className="sticky-bar-left-side">
              <div className="content-1">
                <h1>Date</h1>
                <span> 1 April 2022 </span>
              </div>
              <div className="content-2">
                <h1>Time</h1>
                <span> 7:00 pm</span>
              </div>
              <div className="content-3">
                <h1>Duration</h1>
                <span>80 min</span>
              </div>
            </div>

            <div className="event-include-wrap">
              <div className="event-include">
                <h1>This event includes</h1>
                <span className="interaction">
                  <div className="emoji"> 👍🏻 </div>Direct interaction with the
                  photographer
                </span>
                <span className="recording">
                  <div className="emoji"> 🎥 </div> Session recording after the
                  event
                </span>

                <span className="about-the-event">About the Event</span>
                <div className="para">
                  Whether you are a Beginner, Intermediate level or want to turn
                  yourself into a Professional and we have the strategy of
                  teaching the Photography Basics.
                </div>
                <span className="read-more">
                  Read More <ArrowDown />
                </span>
              </div>
            </div>
          </div>

          <div className="header-containt-right">
            <div className="about-host">About host</div>

            <div className="photography-profile">
              <img src="/images/Ellipse 9.png" />
              <div className="profile-name">
                <h1>YourMoments</h1>
                <h2>@JwishPatel</h2>
              </div>
              <PlusIcon />
            </div>

            <p>
              capture the true essence of your relations and the most amazing
              moments of your life
            </p>

            <span>
              Read More <ArrowDown />
            </span>
            <div className="read-full-story">
              Read full story <ArrowDown />
            </div>
          </div>

          <div className="saved-icon">
            <SavedIcon />
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="frequently-asked-questions">
          <div className="frq">Frequently Asked Questions</div>
          <div className="find-ans">
            find all your answers related to this event.
          </div>

          <div className="question-1">
            <h1>Who can participate in this Event?</h1>
            <a
              // href="#"
              className="drop-down-svg"
              onClick={(e) => handleDropDown(e, "que1")}
            >
              {sections.que1 && (
                <span>
                  <UpArrow />
                </span>
              )}
              {sections.que1 === false && (
                <span>
                  <ArrowDown />
                </span>
              )}
            </a>
          </div>
          <div className="question-2">
            <h1>What are the prerequisites for joining this workshop?</h1>
            <a
              // href="#"
              className="drop-down-svg"
              onClick={(e) => handleDropDown(e, "que2")}
            >
              {sections.que2 && (
                <span>
                  <UpArrow />
                </span>
              )}
              {sections.que2 === false && (
                <span>
                  <ArrowDown />
                </span>
              )}
            </a>
          </div>
          <div className="question-3">
            <h1>Do we own our Images?</h1>
            <a
              // href="#"
              className="drop-down-svg"
              onClick={(e) => handleDropDown(e, "que3")}
            >
              {sections.que3 && (
                <span>
                  {" "}
                  <UpArrow />
                </span>
              )}
              {sections.que3 === false && (
                <span>
                  <ArrowDown />
                </span>
              )}
            </a>
          </div>
          <div className="question-4">
            <h1>Is it pre-recorded or live Event?</h1>
            <a
              // href="#"
              className="drop-down-svg"
              onClick={(e) => handleDropDown(e, "que4")}
            >
              {sections.que4 && (
                <span>
                  <UpArrow />
                </span>
              )}
              {sections.que4 === false && (
                <span>
                  <ArrowDown />
                </span>
              )}
            </a>
          </div>
        </div>

        <div className="post-your-question">
          <h1>Post Your Question</h1>
          <span>Your question might be answered as soon as</span>

          <form onSubmit={handleFormSubmit}>
            <textarea
              placeholder="please submit your questions"
              name="question"
              value={question}
              onChange={handleInputChange}
            ></textarea>
            <div className="but">
              <button type="submit">Post</button>
            </div>
          </form>


        </div>
        
      </div>



      <div className="sticky-bar">
        <div className="sticky-bar-left-side">
          <div className="content-1">
            <h1>Date</h1>
            <span> 1 April 2022 </span>
          </div>
          <div className="content-2">
            <h1>Time</h1>
            <span> 7:00 pm</span>
          </div>
          <div className="content-3">
            <h1>Duration</h1>
            <span>80 min</span>
          </div>
        </div>
        <div className="sticky-bar-right-side">
          <div className="price">
            <h1>Price</h1>
            <span>Rs. 400</span>
          </div>
          <div className="tickets">
            <button>
              <a href="#">Tickets</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhotographyEvent;
