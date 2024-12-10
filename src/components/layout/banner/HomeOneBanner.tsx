import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import banneronethumb from "public/images/banner/banner-one-thumb.png";
import star from "public/images/star.png";
import videoframe from "public/images/video-frame.png";
import YoutubeEmbed from "@/components/youtube/YoutubeEmbed";

gsap.registerPlugin(ScrollTrigger);
const HomeOneBanner = () => {
  const [videoActive, setVideoActive] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const device_width = window.innerWidth;

      if (
        document.querySelectorAll(".g-ban-one").length > 0 &&
        device_width > 576
      ) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".banner",
            start: "center center",
            end: "+=100%",
            scrub: true,
            pin: false,
          },
        });

        tl.set(".g-ban-one", {
          y: "-10%",
        });

        tl.to(".g-ban-one", {
          opacity: 0,
          scale: 2,
          y: "100%",
          zIndex: -1,
          duration: 2,
        });
      }
    }
  }, []);

  return (
    <>
      <section className="banner">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="banner__content">
                <h1 className="text-uppercase text-end fw-9 mb-0 ">
                  جمعية <span className="text-stroke"> عرقة</span>
                  <span className="interval">
                    نرصد الحاجة .. ونحفظ كرامة المحتاج
                  </span>
                </h1>
                <div className="banner__content-inner">
                  <p>
                    جمعية عرقة الخيرية باب من الخير والعطاء والبذل والإحسان لكل
                    محسن ومتبرع وباذل ودال على الخير ،والموفق من وفقه الله لفعل
                    الخير وبذله والدلالة عليه قال صلى الله عليه وسلم (الدال على
                    الخير كفاعله ) تأسست الجمعية بتاريخ 1430/05/10هـ و سجلت
                    بوزارة الموارد البشرية والتنمية الاجتماعية برقم (489) اننا
                    في جمعية عرقة الخيرية نرحب بالتعاون مع الجميع ليعملوا من
                    خلال الجمعية ومعها لتحقيق ذاتهم ولخدمة مجتمعهم وبناء وطنهم،
                    ونتكامل مع شركائنا في القطاع الحكومي والخاص والقطاع الثالث
                    لنحقق التنمية المستدامة. شعارنا ان نرصد الحاجة ونحفظ كرامة
                    المحتاج نعطي المحتاج حق من حقوقه ونؤهله ليكتفي بنفسه عن سؤال
                    الناس ، ومن هنا ندعو الجميع ليشارك في صناعة النجاح وتحقيق
                    الطموح كلاً على قدر استطاعته .
                  </p>
                  {/* <div className="cta section__content-cta">
                    <div className="single">
                      <h5 className="fw-7">12+</h5>
                      <p className="fw-5">سنوات من الخبرة</p>
                    </div>
                    <div className="single">
                      <h5 className="fw-7">25k</h5>
                      <p className="fw-5">المشاريع المنجزة</p>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Image
          src={banneronethumb}
          alt="Image"
          className="banner-one-thumb d-none d-sm-block g-ban-one"
        />
        <Image src={star} alt="Image" className="star" />
        <div className="banner-left-text banner-social-text d-none d-md-flex">
          <Link href="mailto:info@xpovio.com">بريد : info@xpovio.com</Link>
          <Link href="tel:99-2158-003-6980">يتصل : +99 2158 003 6980</Link>
        </div>
        <div className="banner-right-text banner-social-text d-none d-md-flex">
          <Link href="https://www.instagram.com/" target="_blank">
            instagram
          </Link>
          <Link href="https://www.pinterest.com/" target="_blank">
            Linkedin
          </Link>
          <Link href="https://www.facebook.com/" target="_blank">
            facebook
          </Link>
        </div>
        <button
          className="video-frame video-btn"
          onClick={() => setVideoActive(true)}
        >
          <Image src={videoframe} alt="Image" priority />
          <i className="fa-sharp fa-solid fa-play"></i>
        </button>
        <div className="lines d-none d-lg-flex">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </section>
      <div
        className={(videoActive ? " video-zoom-in" : " ") + " video-backdrop"}
        onClick={() => setVideoActive(false)}
      >
        <div className="video-inner">
          <div
            className="video-container"
            onClick={(e: any) => e.stopPropagation()}
          >
            {videoActive && <YoutubeEmbed embedId="fSv6UgCkuTU" />}
            <button
              aria-label="close video popup"
              className="close-video-popup"
              onClick={() => setVideoActive(false)}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeOneBanner;
