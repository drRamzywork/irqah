import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "public/images/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer
      className="footer section pb-0"
      style={{ backgroundImage: "url('/images/footer/footer-bg.png')" }}
    >
      <div className="container">
        <div className="row gaper">
          <div className="col-12 col-lg-5 col-xl-6">
            <div className="footer__single">
              <Link href="/" className="logo">
                <Image src={logo} alt="Image" />
              </Link>
              <div className="footer__single-meta">
                <Link
                  href="https://www.google.com/maps/d/viewer?mid=1UZ57Drfs3SGrTgh6mrYjQktu6uY&hl=en_US&ll=18.672105000000013%2C105.68673800000003&z=17"
                  target="_blank"
                >
                  <i className="fa-sharp fa-solid fa-location-dot"></i>
                  901 شارع بيت ، جناح 170 الإسكندرية ، الولايات المتحدة
                  الأمريكية
                </Link>
                <Link href="tel:406-555-0120">
                  <i className="fa-sharp fa-solid fa-phone-volume"></i>
                  (406) 555-0120
                </Link>
                <Link href="mailto:info@xpovio.com">
                  <i className="fa-sharp fa-solid fa-envelope"></i>
                  info@xpovio.com
                </Link>
              </div>
              <div className="footer__cta text-end">
                <Link href="contact-us" className="btn btn--secondary">
                  احجز مكالمة الآن
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-2 col-xl-2">
            <div className="footer__single">
              <div className="footer__single-intro">
                <h5>اكتشف</h5>
              </div>
              <div className="footer__single-content">
                <ul>
                  <li>
                    <Link href="about-us">معلومات عنا</Link>
                  </li>
                  <li>
                    <Link href="client-feedback">الحائز على جائزة</Link>
                  </li>
                  <li>
                    <Link href="blog"> الأخبار والمدونة</Link>
                  </li>
                  <li>
                    <Link href="contact-us">وظائف</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-5 col-xl-4">
            <div className="footer__single">
              <div className="footer__single-intro">
                <h5>اشترك في النشرة الإخبارية لدينا</h5>
              </div>
              <div className="footer__single-content">
                <p>
                  مرحباً إلى الوكالة الرقمية لدينا نحن متخصصون في مساعدة الأعمال
                  التجارية التي تشبه أعمالك على النجاح متصل.
                </p>
                <div className="footer__single-form">
                  <form action="#" method="post">
                    <div className="input-email">
                      <input
                        type="email"
                        name="subscribe-news"
                        id="subscribeNews"
                        placeholder="Enter Your Email"
                        required
                      />
                      <button type="submit" className="subscribe">
                        <i className="fa-sharp fa-solid fa-paper-plane"></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="footer__copyright">
              <div className="row align-items-center gaper">
                <div className="col-12 col-lg-8">
                  <div className="footer__copyright-text text-center text-lg-end">
                    <p>
                      حقوق النشر والنسخ ؛ &copy;
                      <span id="copyYear">{currentYear}</span> Xpovio بواسطة{" "}
                      <Link
                        href="https://themeforest.net/user/UltraDevs"
                        target="_blank"
                      >
                        UltraDevs{" "}
                      </Link>
                      . كل الحقوق محفوظة
                    </p>
                  </div>
                </div>
                <div className="col-12 col-lg-4">
                  <div className="social justify-content-center justify-content-lg-end">
                    <Link href="https://www.facebook.com/" target="_blank">
                      <i className="fa-brands fa-facebook-f"></i>
                    </Link>
                    <Link href="https://www.twitter.com/" target="_blank">
                      <i className="fa-brands fa-twitter"></i>
                    </Link>
                    <Link href="https://www.pinterest.com/" target="_blank">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </Link>
                    <Link href="https://www.instagram.com/" target="_blank">
                      <i className="fa-brands fa-instagram"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
