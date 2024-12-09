import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import dotlarge from "public/images/agency/dot-large.png";
import one from "public/images/service/one.png";

const HomeThreeServices = () => {
  const [imgTab, setImgTab] = useState(0);
  return (
    <section className="section service-f fade-wrapper ">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section__header--secondary g-ind">
              <div className="row gaper align-items-center">
                <div className="col-12 col-lg-8">
                  <div className="section__header text-center text-lg-end mb-0">
                    <span className="sub-title">
                      معلومات عنا
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                    <h2 className="title title-anim">خدماتنا الرئيسية</h2>
                  </div>
                </div>
                <div className="col-12 col-lg-4">
                  <div className="text-center text-lg-start">
                    <Link
                      href="our-services"
                      className="btn btn--primary text-capitalize"
                    >
                      مشاهدة الكل خدمة
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="service-f-wrapper">
              <div
                className={
                  "service-f-single fade-top " +
                  (imgTab == 0 ? " service-f-single-active" : " ")
                }
              >
                <div className="single-item">
                  <span className="sub-title">
                    01
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                  <h4>الرقمنة</h4>
                  <div className="p-single">
                    <p>
                      نحن نبني حلولاً ذكية من الجيل التالي عند تقاطع الجديد فرص
                      العمل والابتكارات التكنولوجية.
                    </p>
                  </div>
                </div>
                <div className="p-single single-item p-sm">
                  <ul>
                    <li>
                      <i className="fa-solid fa-angle-right"></i>
                      تحديث الإرث
                    </li>
                    <li>
                      <i className="fa-solid fa-angle-right"></i>
                      تصميم الحلول
                    </li>
                    <li>
                      <i className="fa-solid fa-angle-right"></i>
                      تمكين التكنولوجيا
                    </li>
                    <li>
                      <i className="fa-solid fa-angle-right"></i>
                      أنظمة المحمول الأولى
                    </li>
                  </ul>
                </div>
                <div className="single-item p-single p-sm">
                  <Image src={one} alt="Image" />
                </div>
                <button
                  className="toggle-service-f"
                  onClick={() => setImgTab(imgTab === 0 ? -1 : 0)}
                ></button>
              </div>
              <div
                className={
                  "service-f-single fade-top " +
                  (imgTab == 1 ? " service-f-single-active" : " ")
                }
              >
                <div className="single-item">
                  <span className="sub-title">
                    02
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                  <h4>أنظمة المحمول الأولى</h4>
                  <div className="p-single">
                    <p>
                      نحن نبني حلولاً ذكية من الجيل التالي عند تقاطع الجديد فرص
                      العمل والابتكارات التكنولوجية.
                    </p>
                  </div>
                </div>
                <div className="p-single single-item p-sm">
                  <ul>
                    <li>
                      <i className="fa-solid fa-angle-right"></i>
                      تحديث الإرث
                    </li>
                    <li>
                      <i className="fa-solid fa-angle-right"></i>
                      تصميم الحلول
                    </li>
                    <li>
                      <i className="fa-solid fa-angle-right"></i>
                      تمكين التكنولوجيا
                    </li>
                    <li>
                      <i className="fa-solid fa-angle-right"></i>
                      أنظمة المحمول الأولى
                    </li>
                  </ul>
                </div>
                <div className="single-item p-single p-sm">
                  <Image src={one} alt="Image" />
                </div>
                <button
                  className="toggle-service-f"
                  onClick={() => setImgTab(imgTab === 1 ? -1 : 1)}
                ></button>
              </div>
              <div
                className={
                  "service-f-single fade-top " +
                  (imgTab == 2 ? " service-f-single-active" : " ")
                }
              >
                <div className="single-item">
                  <span className="sub-title">
                    03
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                  <h4>أنظمة المحمول الأولى</h4>
                  <div className="p-single">
                    <p>
                      نحن نبني حلولاً ذكية من الجيل التالي عند تقاطع الجديد فرص
                      العمل والابتكارات التكنولوجية.
                    </p>
                  </div>
                </div>
                <div className="p-single single-item p-sm">
                  <ul>
                    <li>
                      <i className="fa-solid fa-angle-right"></i>
                      تحديث الإرث
                    </li>
                    <li>
                      <i className="fa-solid fa-angle-right"></i>
                      تصميم الحلول
                    </li>
                    <li>
                      <i className="fa-solid fa-angle-right"></i>
                      تمكين التكنولوجيا
                    </li>
                    <li>
                      <i className="fa-solid fa-angle-right"></i>
                      أنظمة المحمول الأولى
                    </li>
                  </ul>
                </div>
                <div className="single-item p-single p-sm">
                  <Image src={one} alt="Image" />
                </div>
                <button
                  className="toggle-service-f"
                  onClick={() => setImgTab(imgTab === 2 ? -1 : 2)}
                ></button>
              </div>
              <div
                className={
                  "service-f-single fade-top " +
                  (imgTab == 3 ? " service-f-single-active" : " ")
                }
              >
                <div className="single-item">
                  <span className="sub-title">
                    04
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                  <h4>Business consulting</h4>
                  <div className="p-single">
                    <p>
                      نحن نبني حلولاً ذكية من الجيل التالي عند تقاطع الجديد فرص
                      العمل والابتكارات التكنولوجية.
                    </p>
                  </div>
                </div>
                <div className="p-single single-item p-sm">
                  <ul>
                    <li>
                      <i className="fa-solid fa-angle-right"></i>
                      تحديث الإرث
                    </li>
                    <li>
                      <i className="fa-solid fa-angle-right"></i>
                      تصميم الحلول
                    </li>
                    <li>
                      <i className="fa-solid fa-angle-right"></i>
                      تمكين التكنولوجيا
                    </li>
                    <li>
                      <i className="fa-solid fa-angle-right"></i>
                      أنظمة المحمول الأولى
                    </li>
                  </ul>
                </div>
                <div className="single-item p-single p-sm">
                  <Image src={one} alt="Image" />
                </div>
                <button
                  className="toggle-service-f"
                  onClick={() => setImgTab(imgTab === 3 ? -1 : 3)}
                ></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image src={dotlarge} alt="Image" className="dot-img" />
    </section>
  );
};

export default HomeThreeServices;
