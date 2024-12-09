import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import videoframethree from "public/images/video-frame-three.png";
import thumbsmall from "public/images/banner/four-thumb-l-sm.png";
import fourthumb from "public/images/banner/four-thumb-l.png";

gsap.registerPlugin(ScrollTrigger);
const HomeFourBannerLight = () => {
  useEffect(() => {
    const deviceWidth = window.innerWidth;

    if (document.querySelector(".g-ban-four") && deviceWidth > 576) {
      gsap.registerPlugin(ScrollTrigger);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".banner-four",
          start: "center center",
          end: "+=100%",
          scrub: true,
          pin: false,
        },
      });

      tl.to(".g-ban-four", {
        opacity: 0,
        scale: 0.3,
        y: "100%",
        x: "30%",
        zIndex: -1,
        duration: 2,
      });
    }
  }, []);

  return (
    <section className="banner-four">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="banner-four__content">
              <div className="intro">
                <p>
                  أنا مصمم بعلامة تجارية يجمع بين الإبداع والاستراتيجية لخلق
                  مقنع هوية العلامة التجارية وتجارب التصميم الرقمي.
                </p>
                <div className="arrow-wrapper">
                  <span className="arrow"></span>
                </div>
              </div>
              <div className="banner-four__title">
                <h1>
                  أنا رقمي مصمم
                  <Link className="frame g-ban-frame" href="about-us">
                    <Image src={videoframethree} alt="Image" />
                    <i className="fa-solid fa-arrow-up-right"></i>
                  </Link>
                  & حالم
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image src={thumbsmall} alt="Image" className="small" />
      <Image src={fourthumb} alt="Image" className="large g-ban-four" />
    </section>
  );
};

export default HomeFourBannerLight;
