import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";

const ServiceMain = () => {
  return (
    <section className="section service-t">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="service-t__slider-w">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                slidesPerGroup={1}
                speed={800}
                loop={true}
                centeredSlides={false}
                modules={[Autoplay, Navigation]}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                navigation={{
                  nextEl: ".next-service-t",
                  prevEl: ".prev-service-t",
                }}
                className="service-t__slider"
                breakpoints={{
                  1400: {
                    slidesPerView: 4,
                  },
                  1200: {
                    slidesPerView: 3,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                }}
              >
                <SwiperSlide>
                  <div className="service-t-single-wrapper">
                    <div className="service-t__slider-single">
                      <div className="intro">
                        <span className="sub-title">
                          01
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                        <h4>
                          <Link href="service-single"> العلامة التجارية </Link>
                        </h4>
                      </div>
                      <ul>
                        <li> تحديد الفكرة </li>
                        <li> ريسيرش المنافس </li>
                        <li> الجمهور المستهدف </li>
                        <li> التحقق من صحة الفكرة </li>
                        <li> قيمة العميل </li>
                      </ul>
                      <div className="cta">
                        <Link href="service-single">
                          <i className="icon-arrow-top-right"></i>
                          <span>تفاصيل الخدمة</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="service-t-single-wrapper">
                    <div className="service-t__slider-single">
                      <div className="intro">
                        <span className="sub-title">
                          02
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                        <h4>
                          <Link href="service-single">
                            {" "}
                            تصميم تجربة المستخدم{" "}
                          </Link>
                        </h4>
                      </div>
                      <ul>
                        <li> التقدير </li>
                        <li> البحث </li>
                        <li> لوحة القصة </li>
                        <li> تدفق المستخدم </li>
                        <li> هندسة المعلومات </li>
                      </ul>
                      <div className="cta">
                        <Link href="service-single">
                          <i className="icon-arrow-top-right"></i>
                          <span>تفاصيل الخدمة</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="service-t-single-wrapper">
                    <div className="service-t__slider-single">
                      <div className="intro">
                        <span className="sub-title">
                          03
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                        <h4>
                          <Link href="service-single">
                            {" "}
                            تصميم واجهة المستخدم{" "}
                          </Link>
                        </h4>
                      </div>
                      <ul>
                        <li> Hi-Fidelity إطار سلكي </li>
                        <li> نظام التصميم </li>
                        <li> العرض التقديمي النهائي </li>
                        <li> التسليم النهائي </li>
                        <li> دعم ما بعد التسليم </li>
                      </ul>
                      <div className="cta">
                        <Link href="service-single">
                          <i className="icon-arrow-top-right"></i>
                          <span>تفاصيل الخدمة</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="service-t-single-wrapper">
                    <div className="service-t__slider-single">
                      <div className="intro">
                        <span className="sub-title">
                          04
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                        <h4>
                          <Link href="service-single"> التطوير </Link>
                        </h4>
                      </div>
                      <ul>
                        <li> الواجهة الأمامية </li>
                        <li> الخلفية </li>
                        <li> تطبيق الهاتف المحمول </li>
                        <li> دعم ما بعد التسليم </li>
                        <li> تطوير الخادم </li>
                      </ul>
                      <div className="cta">
                        <Link href="service-single">
                          <i className="icon-arrow-top-right"></i>
                          <span>تفاصيل الخدمة</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="service-t-single-wrapper">
                    <div className="service-t__slider-single">
                      <div className="intro">
                        <span className="sub-title">
                          01
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                        <h4>
                          <Link href="service-single"> العلامة التجارية </Link>
                        </h4>
                      </div>
                      <ul>
                        <li> تحديد الفكرة </li>
                        <li> ريسيرش المنافس </li>
                        <li> الجمهور المستهدف </li>
                        <li> التحقق من صحة الفكرة </li>
                        <li> قيمة العميل </li>
                      </ul>
                      <div className="cta">
                        <Link href="service-single">
                          <i className="icon-arrow-top-right"></i>
                          <span>تفاصيل الخدمة</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="service-t-single-wrapper">
                    <div className="service-t__slider-single">
                      <div className="intro">
                        <span className="sub-title">
                          02
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                        <h4>
                          <Link href="service-single">
                            {" "}
                            تصميم تجربة المستخدم{" "}
                          </Link>
                        </h4>
                      </div>
                      <ul>
                        <li> التقدير </li>
                        <li> البحث </li>
                        <li> لوحة القصة </li>
                        <li> تدفق المستخدم </li>
                        <li> هندسة المعلومات </li>
                      </ul>
                      <div className="cta">
                        <Link href="service-single">
                          <i className="icon-arrow-top-right"></i>
                          <span>تفاصيل الخدمة</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="service-t-single-wrapper">
                    <div className="service-t__slider-single">
                      <div className="intro">
                        <span className="sub-title">
                          03
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                        <h4>
                          <Link href="service-single">
                            {" "}
                            تصميم واجهة المستخدم{" "}
                          </Link>
                        </h4>
                      </div>
                      <ul>
                        <li> Hi-Fidelity إطار سلكي </li>
                        <li> نظام التصميم </li>
                        <li> العرض التقديمي النهائي </li>
                        <li> التسليم النهائي </li>
                        <li> دعم ما بعد التسليم </li>
                      </ul>
                      <div className="cta">
                        <Link href="service-single">
                          <i className="icon-arrow-top-right"></i>
                          <span>تفاصيل الخدمة</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="service-t-single-wrapper">
                    <div className="service-t__slider-single">
                      <div className="intro">
                        <span className="sub-title">
                          04
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                        <h4>
                          <Link href="service-single"> التطوير </Link>
                        </h4>
                      </div>
                      <ul>
                        <li> الواجهة الأمامية </li>
                        <li> الخلفية </li>
                        <li> تطبيق الهاتف المحمول </li>
                        <li> دعم ما بعد التسليم </li>
                        <li> تطوير الخادم </li>
                      </ul>
                      <div className="cta">
                        <Link href="service-single">
                          <i className="icon-arrow-top-right"></i>
                          <span>تفاصيل الخدمة</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      <div className="slide-group">
        <button aria-label="next item" className="slide-btn next-service-t">
          <i className="fa-light fa-angle-right"></i>
        </button>
        <button aria-label="previous item" className="slide-btn prev-service-t">
          <i className="fa-light fa-angle-left"></i>
        </button>
      </div>
    </section>
  );
};

export default ServiceMain;
