import React from "react";
import Image from "next/image";
import Link from "next/link";
import thumb from "public/images/error-thumb.png";

const ErrorMain = () => {
  return (
    <section className="section error fade-wrapper">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-">
            <div className="error__content text-center fade-top">
              <span className="secondary-text">خطأ</span>
              <div className="thumb">
                <Image src={thumb} alt="Image" />
              </div>
              <h2 className="title-anim">الصفحة غير موجودة</h2>
              <div className="section__content-cta">
                <Link href="/" className="btn btn--secondary">
                  عودة الى بيت
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErrorMain;
