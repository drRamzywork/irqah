import React from "react";
import Link from "next/link";

const CtaThree = () => {
  return (
    <section className="cta-two section pb-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-xxl-11">
            <div
              className="cta-two-wrapper bg-img"
              style={{ backgroundImage: "url('/images/cta-two-bg.png')" }}
            >
              <div className="row gaper align-items-center">
                <div className="col-12 col-lg-8">
                  <div className="cta-two__content">
                    <span>مرحبًا !</span>
                    <h2 className="title-anim">جاهز للعمل معنا؟</h2>
                    <h5>
                      <Link href="tel:19-3265-003-420">
                        :الاتصال +19 3265 003 420
                      </Link>
                    </h5>
                  </div>
                </div>
                <div className="col-12 col-lg-4">
                  <div className="text-end text-lg-start">
                    <Link href="contact-us" className="btn btn--tertiary">
                      ابدأ مشروعًا
                      <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaThree;
