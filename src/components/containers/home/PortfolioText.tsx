import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import one from "public/images/portfolio/one.png";
import two from "public/images/portfolio/two.png";
import three from "public/images/portfolio/three.png";
import four from "public/images/portfolio/four.png";
import five from "public/images/portfolio/five.png";
import six from "public/images/portfolio/six.png";
import seven from "public/images/portfolio/seven.png";
import dot from "public/images/portfolio/dot.png";
import irqah from "public/images/portfolio/irqah.jpg";

const PortfolioText = () => {
  const [hover, setHover] = useState(0);
  return (
    <section className="section pb-1 portfolio pb-0 fade-wrapper position-relative blog">
      <div className="portfolio__text-slider-w">
        <Swiper
          slidesPerView="auto"
          spaceBetween={40}
          speed={5000}
          loop={true}
          centeredSlides={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            reverseDirection: false,
          }}
          // autoplay={false}
          className="portfolio__text-slider"
        >
          <SwiperSlide>
            <div className="portfolio__text-slider-single">
              <h2 className="h3">
                <Link
                  style={{ fontFamily: "var(--theme-font) !important" }}
                  className="text-white"
                  href="/news/topic"
                >
                  مشاركة الجمعية في ملتقى وسطاء التمويل الأصغر{" "}
                  <img
                    src={irqah.src}
                    alt="arrow icon"
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      marginLeft: "8px",
                      verticalAlign: "middle",
                      objectFit: "cover",
                    }}
                  />{" "}
                  <i className="fa-sharp fa-solid fa-arrow-up-left"></i>
                </Link>
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="portfolio__text-slider-single">
              <h2 className="h3">
                <Link
                  style={{ fontFamily: "var(--theme-font) !important" }}
                  className="text-white"
                  href="/news/topic"
                >
                  مشاركة الجمعية في ملتقى وسطاء التمويل الأصغر{" "}
                  <img
                    src={irqah.src}
                    alt="arrow icon"
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      marginLeft: "8px",
                      verticalAlign: "middle",
                      objectFit: "cover",
                    }}
                  />{" "}
                  <i className="fa-sharp fa-solid fa-arrow-up-left"></i>
                </Link>
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="portfolio__text-slider-single">
              <h2 className="h3">
                <Link
                  style={{ fontFamily: "var(--theme-font) !important" }}
                  className="text-white"
                  href="/news/topic"
                >
                  مشاركة الجمعية في ملتقى وسطاء التمويل الأصغر{" "}
                  <img
                    src={irqah.src}
                    alt="arrow icon"
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      marginLeft: "8px",
                      verticalAlign: "middle",
                      objectFit: "cover",
                    }}
                  />{" "}
                  <i className="fa-sharp fa-solid fa-arrow-up-left"></i>
                </Link>
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="portfolio__text-slider-single">
              <h2 className="h3">
                <Link
                  style={{ fontFamily: "var(--theme-font) !important" }}
                  className="text-white"
                  href="/news/topic"
                >
                  مشاركة الجمعية في ملتقى وسطاء التمويل الأصغر{" "}
                  <img
                    src={irqah.src}
                    alt="arrow icon"
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      marginLeft: "8px",
                      verticalAlign: "middle",
                      objectFit: "cover",
                    }}
                  />{" "}
                  <i className="fa-sharp fa-solid fa-arrow-up-left"></i>
                </Link>
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="portfolio__text-slider-single">
              <h2 className="h3">
                <Link
                  style={{ fontFamily: "var(--theme-font) !important" }}
                  className="text-white"
                  href="/news/topic"
                >
                  مشاركة الجمعية في ملتقى وسطاء التمويل الأصغر{" "}
                  <img
                    src={irqah.src}
                    alt="arrow icon"
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      marginLeft: "8px",
                      verticalAlign: "middle",
                      objectFit: "cover",
                    }}
                  />{" "}
                  <i className="fa-sharp fa-solid fa-arrow-up-left"></i>
                </Link>
              </h2>
            </div>
          </SwiperSlide>

          {/* <SwiperSlide>
            <div className="portfolio__text-slider-single">
              <h2 className="h1 str">
                <Link href="https://irqahorg.sa/%d9%85%d8%b4%d8%a7%d8%b1%d9%83%d8%a9-%d8%ac%d9%85%d8%b9%d9%8a%d8%a9-%d8%b9%d8%b1%d9%82%d8%a9-%d8%a7%d9%84%d8%ae%d9%8a%d8%b1%d9%8a%d8%a9-%d9%81%d9%8a-%d9%81%d8%b9%d8%a7%d9%84%d9%8a%d8%a9-%d9%85%d8%b9/">
                  مشاركة جمعية عرقة الخيرية في فعالية معرض الخير بمقر الاتصالات
                  السعودية STC{" "}
                  <i className="fa-sharp fa-solid fa-arrow-up-righ"></i>
                </Link>
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="portfolio__text-slider-single">
              <h2 className="h1">
                <Link href="https://irqahorg.sa/%d9%85%d8%b4%d8%b1%d9%88%d8%b9-%d8%aa%d9%81%d8%b7%d9%8a%d8%b1-%d8%b5%d8%a7%d8%a6%d9%85-1440/">
                  مشروع تفطير صائم 1440{" "}
                  <i className="fa-sharp fa-solid fa-arrow-up-righ"></i>
                </Link>
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="portfolio__text-slider-single">
              <h2 className="h1 str">
                <Link href="https://irqahorg.sa/%d9%85%d8%b4%d8%b1%d9%88%d8%b9-%d8%a7%d8%b3%d8%aa%d9%82%d8%a8%d8%a7%d9%84-%d8%a7%d9%84%d8%a7%d8%b6%d8%a7%d8%ad%d9%8a-%d9%84%d8%b9%d8%a7%d9%85-1439%d9%87%d9%80/">
                  مشروع استقبال الاضاحي لعام 1439هـ{" "}
                  <i className="fa-sharp fa-solid fa-arrow-up-righ"></i>
                </Link>
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="portfolio__text-slider-single">
              <h2 className="h1">
                <Link href="https://irqahorg.sa/%d9%85%d9%86-%d9%85%d8%b4%d8%a7%d8%b1%d9%8a%d8%b9-%d8%b1%d9%85%d8%b6%d8%a7%d9%86-1439-%d9%87%d9%80-%d8%aa%d9%88%d8%b2%d9%8a%d8%b9-%d8%a7%d9%84%d8%b3%d9%84%d8%a7%d9%84-%d8%a7%d9%84%d8%ba%d8%b0%d8%a7/">
                  من مشاريع رمضان 1439 هـ (توزيع السلال الغذائية ){" "}
                  <i className="fa-sharp fa-solid fa-arrow-up-righ"></i>
                </Link>
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="portfolio__text-slider-single">
              <h2 className="h1 str">
                <Link href="portfolio">
                  محفظة رقمية
                  <i className="fa-sharp fa-solid fa-arrow-up-righ"></i>
                </Link>
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="portfolio__text-slider-single">
              <h2 className="h1">
                <Link href="https://irqahorg.sa/%d8%b2%d9%8a%d8%a7%d8%b1%d8%a9-%d8%a7%d9%84%d8%a7%d8%b3%d8%aa%d8%a7%d8%b0-%d8%b9%d8%a8%d8%af%d8%a7%d9%84%d8%b9%d8%b2%d9%8a%d8%b2-%d8%a7%d9%84%d9%85%d8%b1%d8%b4%d8%af/">
                  زيارة الاستاذ عبدالعزيز المرشد{" "}
                  <i className="fa-sharp fa-solid fa-arrow-up-righ"></i>
                </Link>
              </h2>
            </div>
          </SwiperSlide> */}
        </Swiper>
      </div>
      {/* <div className="container-fluid">
        <div className="row gaper">
          <div className="col-12 col-sm-6 col-xl-3">
            <div
              className={
                "portfolio__single topy-tilt fade-top" +
                (hover === 0 ? " portfolio__single-active" : " ")
              }
              onMouseEnter={() => setHover(0)}
            >
              <Link href="portfolio">
                <Image src={one} alt="Image" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="portfolio">
                  <i className="fa-sharp fa-solid fa-arrow-up-left"></i>
                </Link>
                <h4>
                  <Link href="portfolio">التسويق الرقمي</Link>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-3">
            <div
              className={
                "portfolio__single topy-tilt fade-top" +
                (hover === 1 ? " portfolio__single-active" : " ")
              }
              onMouseEnter={() => setHover(1)}
            >
              <Link href="portfolio">
                <Image src={two} alt="Image" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="portfolio">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h4>
                  <Link href="portfolio">التسويق الرقمي</Link>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-3">
            <div
              className={
                "portfolio__single topy-tilt fade-top" +
                (hover === 2 ? " portfolio__single-active" : " ")
              }
              onMouseEnter={() => setHover(2)}
            >
              <Link href="portfolio">
                <Image src={three} alt="Image" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="portfolio">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h4>
                  <Link href="portfolio">التسويق الرقمي</Link>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-3">
            <div
              className={
                "portfolio__single topy-tilt fade-top" +
                (hover === 3 ? " portfolio__single-active" : " ")
              }
              onMouseEnter={() => setHover(3)}
            >
              <Link href="portfolio">
                <Image src={four} alt="Image" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="portfolio">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h4>
                  <Link href="portfolio">التسويق الرقمي</Link>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-3">
            <div
              className={
                "portfolio__single topy-tilt fade-top" +
                (hover === 4 ? " portfolio__single-active" : " ")
              }
              onMouseEnter={() => setHover(4)}
            >
              <Link href="portfolio">
                <Image src={five} alt="Image" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="portfolio">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h4>
                  <Link href="portfolio">التسويق الرقمي</Link>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-3">
            <div
              className={
                "portfolio__single topy-tilt fade-top" +
                (hover === 5 ? " portfolio__single-active" : " ")
              }
              onMouseEnter={() => setHover(5)}
            >
              <Link href="portfolio">
                <Image src={six} alt="Image" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="portfolio">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h4>
                  <Link href="portfolio">التسويق الرقمي</Link>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-3">
            <div className="portfolio__single-alt-wrapper fade-top">
              <div className="portfolio__single-alt topy-tilt">
                <h4>
                  <Link href="portfolio">عرض كل العمل</Link>
                </h4>
                <Link href="portfolio" className="arr">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <Image src={dot} alt="Image" className="dot-one" />
                <Image src={dot} alt="Image" className="dot-two" />
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-3">
            <div
              className={
                "portfolio__single topy-tilt fade-top" +
                (hover === 6 ? " portfolio__single-active" : " ")
              }
              onMouseEnter={() => setHover(6)}
            >
              <Link href="portfolio">
                <Image src={seven} alt="Image" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="portfolio">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h4>
                  <Link href="portfolio">التسويق الرقمي</Link>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lines d-none d-lg-flex">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div> */}
    </section>
  );
};

export default PortfolioText;
