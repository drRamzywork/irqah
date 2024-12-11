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
                      <li className="navbar__item nav-fade">
                        <Link href="about-us">الرئيسية</Link>
                      </li>
                      <li className="navbar__item nav-fade">
                        <Link href="https://store.irqahorg.sa/">
                          موقع التبرعات
                        </Link>
                      </li>
                      <li className="navbar__item navbar__item--has-children nav-fade">
                        <button
                          aria-label="dropdown menu"
                          className="navbar__dropdown-label"
                        >
                          المركز الإعلامي
                        </button>
                        <ul className="navbar__sub-menu">
                          <li>
                            <Link href="/news">الأخبار</Link>
                          </li>
                          <li>
                            <Link href="service-single"> معرض الصور</Link>
                          </li>
                          <li>
                            <Link href="service-single"> مكتبةالفيديو </Link>
                          </li>
                        </ul>
                      </li>

                      <li className="navbar__item navbar__item--has-children nav-fade">
                        <button
                          aria-label="dropdown menu"
                          className="navbar__dropdown-label"
                        >
                          السياسات والأليات واللوائح
                        </button>
                        <ul className="navbar__sub-menu">
                          <li>
                            <Link href="our-projects">سياسة الخصوصية</Link>
                          </li>
                          <li>
                            <Link href="project-single">تفاصيل المشروع </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="navbar__item navbar__item--has-children nav-fade">
                        <button
                          aria-label="dropdown menu"
                          className="navbar__dropdown-label"
                        >
                          من نحن
                        </button>
                        <ul className="navbar__sub-menu">
                          <li>
                            <Link href="https://irqahorg.sa/%d8%a7%d9%84%d8%b1%d8%a4%d9%8a%d8%a9-%d9%88%d8%a7%d9%84%d8%b1%d8%b3%d8%a7%d9%84%d8%a9/">
                              الرؤية والرسالة
                            </Link>
                          </li>
                          <li>
                            <Link href="https://irqahorg.sa/%d9%82%d9%8a%d9%85-%d8%a7%d9%84%d8%ac%d9%85%d8%b9%d9%8a%d8%a9/">
                              القيم{" "}
                            </Link>
                          </li>
                          <li className="navbar__item navbar__item--has-children">
                            <button
                              aria-label="dropdown menu"
                              className="navbar__dropdown-label navbar__dropdown-label-sub"
                            >
                              الجمعية العمومية
                            </button>
                            <ul className="navbar__sub-menu navbar__sub-menu__nested">
                              <li>
                                <Link href="our-teams">اعضاء الجمعية</Link>
                              </li>
                              <li>
                                <Link href="team-single">محاضر الجمعية</Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <Link href="client-feedback">
                              الشهادات - التوصيات
                            </Link>
                          </li>
                          <li>
                            <Link href="portfolio"> كلمة الأمين </Link>
                          </li>
                        </ul>
                      </li>

                      <li className="navbar__item navbar__item--has-children nav-fade">
                        <button
                          aria-label="dropdown menu"
                          className="navbar__dropdown-label"
                        >
                          التقارير
                        </button>
                        <ul className="navbar__sub-menu">
                          <li className="navbar__item navbar__item--has-children">
                            <button
                              aria-label="dropdown menu"
                              className="navbar__dropdown-label navbar__dropdown-label-sub"
                            >
                              المالية
                            </button>
                            <ul className="navbar__sub-menu navbar__sub-menu__nested">
                              <li>
                                <Link href="our-teams">التقارير الربعية</Link>
                              </li>
                              <li>
                                <Link href="team-single">التقارير السنوية</Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <Link href="client-feedback">
                              الشهادات - التوصيات
                            </Link>
                          </li>
                          <li>
                            <Link href="portfolio"> كلمة الأمين </Link>
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
