import React from "react";
import Image from "next/image";
import one from "public/images/mission/one.png";
import two from "public/images/mission/two.png";

const OurMission = () => {
  return (
    <section className="section mission-s fade-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section__header--secondary">
              <div className="row gaper align-items-center">
                <div className="col-12 col-lg-5 col-xxl-5 offset-xxl-2">
                  <div className="section__header text-center text-lg-end mb-0">
                    <span className="sub-title">
                      المهمة و الرؤية
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                    <h2 className="title title-anim">مهمتنا وقيمتنا</h2>
                  </div>
                </div>
                <div className="col-12 col-lg-7 col-xxl-5 ">
                  <div className="text-center text-lg-end">
                    <p>
                      تجميع فريق من الموهوبين لتعزيز تجربتك في مجال تكنولوجيا
                      المعلومات الحلول في xpovio.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row gaper">
          <div className="col-12 col-lg-6">
            <div className="mission-s__single mission-s__single--alt fade-top">
              <h3>الجودة هي رقم واحد</h3>
              <div className="section__content-cta">
                <p className="primary-text">
                  نحدد الجودة كحلول تتجاوز احتياجات العملاء الوقت وضمن
                  الميزانية.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="mission-s__single fade-top">
              <Image src={one} alt="Image" />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="mission-s__single fade-top">
              <Image src={two} alt="Image" />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="mission-s__single mission-s__single--alt fade-top">
              <h3>نحن نخلق قيمة العميل</h3>
              <div className="section__content-cta">
                <p className="primary-text">
                  نحدد الجودة كحلول تتجاوز احتياجات العملاء الوقت وضمن
                  الميزانية.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
