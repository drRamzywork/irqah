import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import logo from "public/images/logo.png";
import logoLight from "public/images/logo-light.png";

const FooterFour = () => {
  const currentYear = new Date().getFullYear();

  let logoSrc = logo;

  const router = useRouter();
  if (router.pathname === "/index-four-light") {
    logoSrc = logoLight;
  }

  if (router.pathname === "/index-five-light") {
    logoSrc = logoLight;
  }

  return (
    <footer className="section footer-four pb-0">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="footer-four__content">
              <div className="intro text-center">
                <h2 className="light-title text-uppercase title-anim">
                  لنصنع بعض السحر ✨ ونظهر للعالم ما تدور حوله علامتك التجارية
                </h2>
              </div>
              <div className="row justify-content-center cta-t section__content-cta">
                <div className="col-12 col-md-8">
                  <h3>
                    <Link href="contact-us">
                      لنتحدث
                      <i className="fa-regular fa-comment-dots"></i>
                    </Link>
                  </h3>
                  <p>دعنا نجعل علامتك التجارية حديث المدينة</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row align-items-center copy-t gaper section__content-cta">
          <div className="col-12 col-lg-6">
            <ul className="justify-content-center justify-content-lg-start">
              <li>
                <Link href="https://www.linkedin.com/" target="_blank">
                  Linkedin
                </Link>
              </li>
              <li>
                <Link href="https://www.twitter.com/" target="_blank">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="https://www.facebook.com/" target="_blank">
                  Facebook
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-12 col-lg-6">
            <div className="text-center text-lg-start">
              <Link href="mailto:hello@website.com" className="text-capitalize">
                hello@website.com
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-three__copyright mt-0">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="footer__copyright">
                <div className="row align-items-center gaper">
                  <div className="col-12 col-lg-8">
                    <div className="footer__copyright-text text-center text-lg-end">
                      <p>
                        حقوق النشر والنسخ ؛ &copy;{" "}
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
                    <div className="text-center text-lg-start">
                      <Link href="/" className="logo">
                        <Image src={logoSrc} alt="Image" />
                      </Link>
                    </div>
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

export default FooterFour;
