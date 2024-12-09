import React from "react";
import Image from "next/image";
import Link from "next/link";
import one from "public/images/blog/one.png";
import two from "public/images/blog/two.png";

const HomeBlog = () => {
  return (
    <section className="section blog fade-wrapper">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div className="section__header text-center">
              <span className="sub-title">
                الأخبار والمدونة
                <i className="fa-solid fa-arrow-right"></i>
              </span>
              <h2 className="title title-anim">ما الجديد في المدونة</h2>
            </div>
          </div>
        </div>
        <div className="row gaper">
          <div className="col-12 col-md-6">
            <div className="blog__single fade-top">
              <div className="blog__single-thumb topy-tilt">
                <Link href="blog-single">
                  <Image src={one} alt="Image" />
                </Link>
              </div>
              <div className="blog__single-content">
                <h4>
                  <Link href="blog-single">
                    قائمة مراجعة بسيطة للتسويق عبر وسائل التواصل الاجتماعي
                  </Link>
                </h4>
                <div className="blog__single-meta">
                  <Link href="blog" className="sub-title">
                    مبدع
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                  <p>MARCH 23, 2023</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="blog__single fade-top">
              <div className="blog__single-thumb topy-tilt">
                <Link href="blog-single">
                  <Image src={two} alt="Image" />
                </Link>
              </div>
              <div className="blog__single-content">
                <h4>
                  <Link href="blog-single">تحويل التحديات إلى فرص</Link>
                </h4>
                <div className="blog__single-meta">
                  <Link href="blog" className="sub-title">
                    مبدع
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                  <p>MARCH 23, 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBlog;
