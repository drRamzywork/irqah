import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import logo from "public/images/logo.png";
import logoLight from "public/images/logo-light.png";
import Offcanvas from "./Offcanvas";

interface HeaderProps {
  openNav: boolean;
  setOpenNav: (value: boolean) => void;
  handleNav: () => void;
}

const HeaderTwo = ({ openNav, handleNav, setOpenNav }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const defaultClasses = "primary-navbar cmn-nav";

  const combinedClasses = `${
    scrolled ? " navbar-active" : " "
  } ${defaultClasses}`;

  let logoSrc = logo;

  const router = useRouter();
  if (router.pathname === "/index-two-light") {
    logoSrc = logoLight;
  }

  return (
    <>
      <header className="header">
        <div className={combinedClasses}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <nav className="navbar p-0">
                  <div className="navbar__logo">
                    <Link href="/" aria-label="go to home">
                      <Image src={logoSrc} priority alt="Image" />
                    </Link>
                  </div>
                  <div className="navbar__menu">
                    <ul>
                      <li className="navbar__item navbar__item--has-children nav-fade">
                        <button
                          aria-label="dropdown menu"
                          className="navbar__dropdown-label"
                        >
                          بيت
                        </button>
                        <ul className="navbar__sub-menu navbar__sub-menu--lg">
                          <li>
                            <Link href="/">وكالة إبداعية</Link>
                          </li>
                          <li>
                            <Link href="index-light">وكالة إبداعية ضوء</Link>
                          </li>
                          <li>
                            <Link href="index-two">الوكالة الرقمية</Link>
                          </li>
                          <li>
                            <Link href="index-two-light">
                              الوكالة الرقمية ضوء
                            </Link>
                          </li>
                          <li>
                            <Link href="index-three">انها الحل</Link>
                          </li>
                          <li>
                            <Link href="index-three-light">انها الحل ضوء</Link>
                          </li>
                          <li>
                            <Link href="index-four">المحفظة الشخصية</Link>
                          </li>
                          <li>
                            <Link href="index-four-light">
                              المحفظة الشخصية ضوء
                            </Link>
                          </li>
                          <li>
                            <Link href="index-five">محفظة تفاعلية</Link>
                          </li>
                          <li>
                            <Link href="index-five-light">
                              محفظة تفاعلية ضوء
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="navbar__item nav-fade">
                        <Link href="about-us">معلومات عنا</Link>
                      </li>
                      <li className="navbar__item navbar__item--has-children nav-fade">
                        <button
                          aria-label="dropdown menu"
                          className="navbar__dropdown-label"
                        >
                          خدمات
                        </button>
                        <ul className="navbar__sub-menu">
                          <li>
                            <Link href="our-services">خدماتنا</Link>
                          </li>
                          <li>
                            <Link href="service-single">تفاصيل الخدمة</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="navbar__item navbar__item--has-children nav-fade">
                        <button
                          aria-label="dropdown menu"
                          className="navbar__dropdown-label"
                        >
                          المشاريع
                        </button>
                        <ul className="navbar__sub-menu">
                          <li>
                            <Link href="our-projects">مشاريعنا</Link>
                          </li>
                          <li>
                            <Link href="project-single">تفاصيل المشروع</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="navbar__item navbar__item--has-children nav-fade">
                        <button
                          aria-label="dropdown menu"
                          className="navbar__dropdown-label"
                        >
                          الصفحات
                        </button>
                        <ul className="navbar__sub-menu">
                          <li>
                            <Link href="faq">التعليمات</Link>
                          </li>
                          <li>
                            <Link href="404">خطأ</Link>
                          </li>
                          <li>
                            <Link href="our-story">قصتنا</Link>
                          </li>
                          <li>
                            <Link href="portfolio"> المحفظة </Link>
                          </li>
                          <li className="navbar__item navbar__item--has-children">
                            <button
                              aria-label="dropdown menu"
                              className="navbar__dropdown-label navbar__dropdown-label-sub"
                            >
                              فريق
                            </button>
                            <ul className="navbar__sub-menu navbar__sub-menu__nested">
                              <li>
                                <Link href="our-teams">فرقنا</Link>
                              </li>
                              <li>
                                <Link href="team-single">تفاصيل الفريق</Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <Link href="client-feedback">
                              الشهادات - التوصيات
                            </Link>
                          </li>
                          <li>
                            <Link href="contact-us">اتصل بنا</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="navbar__item navbar__item--has-children nav-fade">
                        <button
                          aria-label="dropdown menu"
                          className="navbar__dropdown-label"
                        >
                          مدونة
                        </button>
                        <ul className="navbar__sub-menu">
                          <li>
                            <Link href="blog">مدونة</Link>
                          </li>
                          <li>
                            <Link href="blog-single">تفاصيل المدونة</Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <div className="navbar__options">
                    <div className="navbar__mobile-options d-none d-sm-flex">
                      <Link href="contact-us" className="btn btn--secondary">
                        لنتحدث
                      </Link>
                    </div>
                    <button
                      className="open-mobile-menu d-flex d-xl-none"
                      aria-label="toggle mobile menu"
                      onClick={handleNav}
                    >
                      <i className="fa-light fa-bars-staggered"></i>
                    </button>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Offcanvas openNav={openNav} setOpenNav={setOpenNav} />
    </>
  );
};

export default HeaderTwo;
