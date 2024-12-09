import React from "react";
import Image from "next/image";
import Link from "next/link";
import awardthumb from "public/images/award-thumb.png";
import star from "public/images/star.png";
import dotlarge from "public/images/agency/dot-large.png";

const HomeTwoAward = () => {
  return (
    <section className="section award">
      <div className="container">
        <div className="row gaper align-items-center">
          <div className="col-12 col-lg-6  offset-xxl-1">
            <div className="award__thumb dir-rtl">
              <Image src={awardthumb} alt="Image" className="unset fade-left" />
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xxl-5">
            <div className="award__content section__content">
              <span className="sub-title">
                نحن فخورون بذلك
                <i className="fa-solid fa-arrow-right"></i>
              </span>
              <h2 className="title title-anim">
                اكتشف
                <span> الجوائز </span>
              </h2>
              <div className="paragraph">
                <p>
                  أحضر إلى الطاولة استراتيجيات البقاء المربحة للجانبين لضمان
                  الهيمنة الاستباقية. في نهاية اليوم ، المضي قدمًا ، وضع طبيعي
                  جديد تطور من جيل إلى جيل المدرج يتجه نحو انسيابية
                </p>
              </div>
              <div className="award__content-meta">
                <div className="single">
                  <h4>2018</h4>
                  <h4>الجوائز</h4>
                  <p>الموقع الإلكتروني لهذا اليوم</p>
                </div>
                <div className="single">
                  <h4>2020</h4>
                  <h4>الجوائز</h4>
                  <p>مسابقة التصميم الوطنية</p>
                </div>
                <div className="single">
                  <h4>2022</h4>
                  <h4>الجوائز</h4>
                  <p>تطبيقات اليوم</p>
                </div>
              </div>
              <div className="section__content-cta">
                <Link href="about-us" className="btn btn--primary">
                  تعرف أكثر
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image src={star} alt="Image" className="star" />
      <Image src={star} alt="Image" className="star-two" />
      <Image src={dotlarge} alt="Image" className="dot" />
      <Image src={dotlarge} alt="Image" className="dot-two" />
    </section>
  );
};

export default HomeTwoAward;
