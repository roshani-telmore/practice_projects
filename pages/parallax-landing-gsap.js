import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import ParallaxLogo from "components/parallax-landing-gsap/parallax-logo";
import ProfileAccountLogo from "components/parallax-landing-gsap/profile-account";
import InstaLogoParallax from "components/parallax-landing-gsap/insta-logo";
import TwitterLogoParallax from "components/parallax-landing-gsap/twitter-logo";
import ScrollDownArrow from "components/parallax-landing-gsap/scroll-down-arrow";
import LineLogo from "components/parallax-landing-gsap/line";
import RightSideArrow from "components/parallax-landing-gsap/rightside-arrow";
function ParallaxLandingGsap() {
  const hikerRef = useRef();
  const paraRef1 = useRef();
  const paraRef2 = useRef();
  const paraRef3 = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".slider-line",
        start: 0,
        end: "max",
        scrub: true,
        onUpdate: ScrollTrigger.isInViewport(".hiker-level"),
      },
    });
    tl.to(".moving-line", { yPercent: 300 });

    gsap.to(".man-click-photo", {
      scrollTrigger: {
        trigger: ".man-click-photo",
        start: "top center",
        // markers: true,
        toggleActions: "restart pause reverse pause",
        scrub: 3,
      },
      y: -400,
      duration: 3,
    });

    gsap
      .timeline({
        default: { durations: 1 },
        scrollTrigger: {
          trigger: hikerRef.current,
          start: "top center",
          toggleActions: "restart pause reverse pause",
          end: "+=1900",
          scrub: 3,
        },
      })
      .fromTo(paraRef1.current, { x: 600 }, { x: 0 })
      .fromTo(paraRef2.current, { x: -600 }, { x: 0 })
      .fromTo(paraRef3.current, { x: 600 }, { x: 0 });
  });

  return (
    <div className="parallax-landing-page">
      <div className="parallax-header">
        <div className="cloud-img">
          <div className="logo">
            <ParallaxLogo className="mntn-logo" />
            <ul className="menu-blog">
              <li>Equipment</li>
              <li>About us</li>
              <li>Blog</li>
            </ul>

            <div className="account">
              <ProfileAccountLogo />
              <h4>Account</h4>
            </div>
          </div>

          <div className="hero-section">
            <div className="social-media">
              <span>Follow us</span>
              <InstaLogoParallax className="insta" />
              <TwitterLogoParallax className="twit" />
            </div>

            <div className="be-prepare">
              <div className="guide-title">
                <LineLogo /> A Hiking guide
              </div>
              <div className="guide-para">
                Be prepared for the Mountains and beyond!
              </div>
              <div className="scroll-down">
                scroll down
                <ScrollDownArrow />
              </div>
            </div>

            <div className="start-wrap">
              <div className="start">
                <span>Start </span>
                <span>01</span>
                <span>02</span>
                <span>03</span>
              </div>
              <div className="slider">
                <div className="slider-line"></div>
                <div className="moving-line"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="mountain-img"></div>
        <div className="man-click-photo"></div>
      </div>

      <div className="parallax-content" ref={hikerRef}>
        <div className="hiker-level">
          <div className="para-wrap" ref={paraRef1}>
            <div className="number">01</div>
            <div className="para">
              <div className="get-started">
                <LineLogo />
                GEt Started
              </div>

              <div className="titile">What level of hiker are you?</div>
              <p className="hiker-para">
                Determining what level of hiker you are can be an important tool
                when planning future hikes. This hiking level guide will help
                you plan hikes according to different hike ratings set by
                various websites like All Trails and Modern Hiker. What type of
                hiker are you - novice, moderate, advanced moderate, expert, or
                expert backpacker?
              </p>
              <div className="read-more">
                read more <RightSideArrow />
              </div>
            </div>
          </div>

          <div className="hiker-img">
            <img src="/images/parallax01.png" />
          </div>
        </div>

        <div className="hiker-level" ref={hikerRef}>
          <div className="hiker-img">
            <img src="/images/parallax02.png" />
          </div>
          <div className="para-wrap" ref={paraRef2}>
            <div className="number">02</div>
            <div className="para">
              <div className="get-started">
                <LineLogo />
                Hiking Essentials
              </div>

              <div className="titile">Picking the right Hiking Gear!</div>
              <p className="hiker-para">
                The nice thing about beginning hiking is that you don't really
                need any special gear, you can probably get away with things you
                already have. Let's start with clothing. A typical mistake
                hiking beginners make is wearing jeans and regular clothes,
                which will get heavy and chafe wif they get sweaty or wet.
              </p>
              <div className="read-more">
                read more <RightSideArrow />
              </div>
            </div>
          </div>
        </div>

        <div className="hiker-level" ref={hikerRef}>
          <div className="para-wrap" ref={paraRef3}>
            <div className="number">03</div>
            <div className="para">
              <div className="get-started">
                <LineLogo />
                where you go is the key
              </div>

              <div className="titile">Understand Your Map & Timing</div>
              <p className="hiker-para">
                To start, print out the hiking guide and map. If it's raining,
                throw them in a Zip-Lock bag. Read over the guide, study the
                map, and have a good idea of what to expect. I like to know what
                my next landmark is as I hike. For example, I'll read the guide
                and know that say, in a mile, I make a right turn at the
                junction..
              </p>
              <div className="read-more">
                read more <RightSideArrow />
              </div>
            </div>
          </div>
          <div className="hiker-img">
            <img src="/images/parallax03.png" />
          </div>
        </div>

        <div className="parallax-footer">
          <div className="discover-logo">
            <div className="disc-logo">
              <ParallaxLogo />
            </div>
            <p className="disc-para">
              Get out there & discover your next slope, mountain & destination!
            </p>
            <div className="copyright">
              Copyright 2019 MNTN, Inc. Terms & Privacy
            </div>
          </div>

          <div className="more-wrap">
            <div className="more-on-the-blog">
              More on The Blog
              <ul className="about-mntn">
                <li>About MNTN</li>
                <li>Contributors & Writers</li>
                <li>Write For Us</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
              </ul>
            </div>

            <div className="more-on-mntn">
              More on MNTN
              <ul className="team">
                <li>The Team</li>
                <li>Jobs</li>
                <li>Press</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ParallaxLandingGsap;
