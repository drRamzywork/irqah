import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "public/images/logo.png";

interface HeaderProps {
  openNav: boolean;
  setOpenNav: (value: boolean) => void;
}

const Offcanvas = ({ openNav, setOpenNav }: HeaderProps) => {
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const [openNestedMenu, setOpenNestedMenu] = useState<string | null>(null);

  const handleSubmenu = (submenu: string) => {
    if (submenu === openSubMenu) {
      setOpenSubMenu(null);
    } else {
      setOpenSubMenu(submenu);
    }
  };

  const handleNestedmenu = (nestmenu: string) => {
    if (nestmenu === openNestedMenu) {
      setOpenNestedMenu(null);
    } else {
      setOpenNestedMenu(nestmenu);
    }
  };

  const isNestedMenuOpen = (nestmenu: string) => {
    return nestmenu === openNestedMenu ? " nav__dropdown-active" : " ";
  };

  const isNestedMenuButton = (nestmenu: string) => {
    return nestmenu === openNestedMenu ? " navbar__item-active" : " ";
  };

  const isSubMenuOpen = (submenu: string) => {
    return submenu === openSubMenu ? " nav__dropdown-active" : " ";
  };

  const isSubMenuButton = (submenu: string) => {
    return submenu === openSubMenu ? " navbar__item-active" : " ";
  };

  // window resize
  useEffect(() => {
    const handleResizeHeader = (): void => {
      setOpenNav(false);
      setOpenSubMenu(null);
    };

    window.addEventListener("resize", handleResizeHeader);

    return () => {
      window.removeEventListener("resize", handleResizeHeader);
    };
  }, []);

  const closeNav = () => {
    setOpenNav(false);
    setOpenSubMenu(null);
  };

  return (
    <div className="offcanvas-nav">
      <div
        className={"offcanvas-menu" + (openNav ? " show-offcanvas-menu" : " ")}
      >
        <nav className="offcanvas-menu__wrapper" data-lenis-prevent>
          <div className="offcanvas-menu__header nav-fade">
            <div className="logo">
              <Link href="/">
                <Image src={logo} alt="Image" title="Image" priority />
              </Link>
            </div>
            <button
              aria-label="close offcanvas menu"
              className="close-offcanvas-menu"
              onClick={closeNav}
            >
              <i className="fa-light fa-xmark-large"></i>
            </button>
          </div>
          <div className="offcanvas-menu__list">
            <div className="navbar__menu">
              <ul>
                {/* <li className="navbar__item navbar__item--has-children nav-fade">
                  <button
                    aria-label="dropdown menu"
                    className={`navbar__dropdown-label ${isSubMenuButton(
                      "home"
                    )}`}
                    onClick={() => handleSubmenu("home")}
                  >
                    الرئيسية
                  </button>
                  <ul className={`navbar__sub-menu ${isSubMenuOpen("home")}`}>
                    <li>
                      <Link href="/">الرئيسية</Link>
                    </li>
                    <li>
                      <Link href="index-light">وكالة إبداعية ضوء</Link>
                    </li>
                    <li>
                      <Link href="index-two">الوكالة الرقمية</Link>
                    </li>
                    <li>
                      <Link href="index-two-light">الوكالة الرقمية ضوء</Link>
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
                      <Link href="index-four-light">المحفظة الشخصية ضوء</Link>
                    </li>
                    <li>
                      <Link href="index-five">محفظة تفاعلية</Link>
                    </li>
                    <li>
                      <Link href="index-five-light">محفظة تفاعلية ضوء</Link>
                    </li>
                  </ul>
                </li> */}
                <li className="navbar__item nav-fade">
                  <Link href="/">الرئيسية</Link>
                </li>
                <li className="navbar__item nav-fade">
                  <Link href="https://store.irqahorg.sa/" target="_blank">
                    موقع التبرعات
                  </Link>
                </li>
                <li className="navbar__item navbar__item--has-children nav-fade">
                  <button
                    aria-label="dropdown menu"
                    className={`navbar__dropdown-label ${isSubMenuButton(
                      "services"
                    )}`}
                    onClick={() => handleSubmenu("services")}
                  >
                    المركز الإعلامي
                  </button>
                  <ul
                    className={`navbar__sub-menu ${isSubMenuOpen("services")}`}
                  >
                    <li>
                      <Link href="https://irqahorg.sa/news/" target="_blank">
                        الأخبار
                      </Link>
                    </li>
                    <li>
                      <Link href="https://irqahorg.sa/gallery/" target="_blank">
                        معرض الصور
                      </Link>
                    </li>
                    <li>
                      <Link href="https://irqahorg.sa/video/" target="_blank">
                        مكتبةالفيديو
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="navbar__item navbar__item--has-children nav-fade">
                  <button
                    aria-label="dropdown menu"
                    className={`navbar__dropdown-label ${isSubMenuButton(
                      "projects"
                    )}`}
                    onClick={() => handleSubmenu("projects")}
                  >
                    السياسات والأليات واللوائح
                  </button>
                  <ul
                    className={`navbar__sub-menu ${isSubMenuOpen("projects")}`}
                  >
                    <li>
                      <Link href="our-projects">سياسة الخصوصية</Link>
                    </li>
                    <li>
                      <Link href="project-single">تفاصيل المشروع</Link>
                    </li>
                  </ul>
                </li>
                <li className="navbar__item navbar__item--has-children nav-fade">
                  <button
                    aria-label="dropdown menu"
                    className={`navbar__dropdown-label ${isSubMenuButton(
                      "pages"
                    )}`}
                    onClick={() => handleSubmenu("pages")}
                  >
                    من نحن
                  </button>
                  <ul className={`navbar__sub-menu ${isSubMenuOpen("pages")}`}>
                    <li>
                      <Link href="faq">التعريف بالجمعية</Link>
                    </li>
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
                        className={`navbar__dropdown-label navbar__dropdown-label-sub ${isNestedMenuButton(
                          "team"
                        )}`}
                        onClick={() => handleNestedmenu("team")}
                      >
                        الجمعية العمومية
                      </button>
                      <ul
                        className={`navbar__sub-menu navbar__sub-menu__nested ${isNestedMenuOpen(
                          "team"
                        )}`}
                      >
                        <li>
                          <Link href="our-teams">اعضاء الجمعية</Link>
                        </li>
                        <li>
                          <Link href="team-single">محاضر الجمعية</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="portfolio"> كلمة الأمين </Link>
                    </li>
                    <li className="navbar__item navbar__item--has-children">
                      <button
                        aria-label="dropdown menu"
                        className={`navbar__dropdown-label navbar__dropdown-label-sub ${isNestedMenuButton(
                          "team2"
                        )}`}
                        onClick={() => handleNestedmenu("team2")}
                      >
                        الهيكل الادراي
                      </button>
                      <ul
                        className={`navbar__sub-menu navbar__sub-menu__nested ${isNestedMenuOpen(
                          "team2"
                        )}`}
                      >
                        <li>
                          <Link href="our-teams">أعضاء مجلس الإدارة</Link>
                        </li>
                        <li>
                          <Link href="team-single">الهيكل التنظيمي</Link>
                        </li>
                        <li>
                          <Link href="team-single">اللجان العامله </Link>
                        </li>
                        <li>
                          <Link href="team-single">الادارة التنفيذية</Link>
                        </li>
                      </ul>
                    </li>

                    {/* <li>
                      <Link href="contact-us">اتصل بنا</Link>
                    </li> */}
                  </ul>
                </li>
                <li className="navbar__item navbar__item--has-children nav-fade">
                  <button
                    aria-label="dropdown menu"
                    className={`navbar__dropdown-label navbar__dropdown-label-sub ${isSubMenuButton(
                      "blog"
                    )}`}
                    onClick={() => handleSubmenu("blog")}
                  >
                    التقارير
                  </button>
                  <ul className={`navbar__sub-menu ${isSubMenuOpen("blog")}`}>
                    <li className="navbar__item navbar__item--has-children">
                      <button
                        aria-label="dropdown menu"
                        className={`navbar__dropdown-label navbar__dropdown-label-sub ${isNestedMenuButton(
                          "moeny"
                        )}`}
                        onClick={() => handleNestedmenu("moeny")}
                      >
                        المالية
                      </button>
                      <ul
                        className={`navbar__sub-menu navbar__sub-menu__nested ${isNestedMenuOpen(
                          "moeny"
                        )}`}
                      >
                        <li>
                          <Link href="our-teams">التقارير الربعية</Link>
                        </li>
                        <li>
                          <Link href="team-single">التقارير السنوية</Link>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <Link href="blog">استبانات تقييم الاداء</Link>
                    </li>

                    <li>
                      <Link href="blog-single">املاك الجمعية</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="offcanvas-menu__options nav-fade">
            <div className="offcanvas__mobile-options d-flex">
              <Link href="contact-us" className="btn btn--secondary">
                لنتحدث
              </Link>
            </div>
          </div>
          <div className="offcanvas-menu__social social nav-fade">
            <Link
              href="https://www.facebook.com/"
              target="_blank"
              aria-label="share us on facebook"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </Link>
            <Link
              href="https://www.twitter.com/"
              target="_blank"
              aria-label="share us on twitter"
            >
              <i className="fa-brands fa-twitter"></i>
            </Link>
            <Link
              href="https://www.pinterest.com/"
              target="_blank"
              aria-label="share us on pinterest"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </Link>
            <Link
              href="https://www.instagram.com/"
              target="_blank"
              aria-label="share us on instagram"
            >
              <i className="fa-brands fa-instagram"></i>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Offcanvas;
