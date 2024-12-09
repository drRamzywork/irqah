import React from "react";
import Image from "next/image";
import Link from "next/link";
import star from "public/images/star.png";
import dotlarge from "public/images/agency/dot-large.png";
import clutch from "public/images/agency/clutch.png";
import thumbthree from "public/images/agency/thumb-three.png";

const HomeThreeAgency = () => {
  return (
    <section className="section agency agency-two">
      <div className="container">
        <div className="row gaper align-items-center">
          <div className="col-12 col-lg-6">
            <div className="agency__thumb">
              <Image src={thumbthree} alt="Image" className="fade-left" />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="agency__content section__content">
              <span className="sub-title">
                معلومات عنا
                <i className="fa-solid fa-arrow-right"></i>
              </span>
              <h2 className="title title-anim">
                نحن مبدعون الرقميون وكالة في لندن
              </h2>
              <div className="paragraph">
                <p>
                  أحضر إلى الطاولة استراتيجيات البقاء المربحة للجانبين لضمان
                  الهيمنة الاستباقية. في نهاية اليوم ، للمضي قدمًا ، وضع طبيعي
                  جديد تطور من جيل إلى جيل المدرج متجهًا نحو حل سحابي مبسط للمضي
                  قدمًا في porttitor القول المأثور سابين.
                </p>
              </div>
              <div className="cta section__content-cta">
                <div className="single">
                  <h5 className="fw-7">12+</h5>
                  <p className="fw-5">سنوات من الخبرة</p>
                </div>
                <div className="single">
                  <h5 className="fw-7">25k</h5>
                  <p className="fw-5">المشاريع المنجزة</p>
                </div>
                <div className="single">
                  <h5 className="fw-7">120+</h5>
                  <p className="fw-5">أعضاء الفريق</p>
                </div>
              </div>
              <div className="section__content-cta cta-group">
                <Link href="/" className="clutch">
                  <Image src={clutch} alt="Image" />
                </Link>
                <Link
                  href="contact-us"
                  className="btn btn--primary text-capitalize"
                >
                  حجز مكالمة
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image src={star} alt="Image" className="star" />
      <Image src={dotlarge} alt="Image" className="dot-large" />
    </section>
  );
};

export default HomeThreeAgency;
