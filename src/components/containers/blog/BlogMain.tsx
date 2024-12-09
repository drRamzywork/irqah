import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import YoutubeEmbed from "@/components/youtube/YoutubeEmbed";
import eight from "public/images/news/eight.png";
import nine from "public/images/news/nine.png";
import ten from "public/images/news/ten.png";
import eleven from "public/images/news/eleven.png";
import twelve from "public/images/news/twelve.png";
import thirteen from "public/images/news/thirteen.png";
import fourteen from "public/images/news/fourteen.png";

const BlogMain = () => {
  const [videoActive, setVideoActive] = useState(false);
  return (
    <>
      <section className="section blog-main fade-wrapper">
        <div className="container">
          <div className="row gaper">
            <div className="col-12 col-xl-8">
              <div className="blog-main__content">
                <div className="blog-main__single fade-top">
                  <div className="thumb">
                    <div className="thumb-link ">
                      <Link href="blog-single">
                        <Image src={eight} alt="Image" />
                      </Link>
                    </div>
                    <div className="meta">
                      <div className="meta__left">
                        <p>
                          <strong>كتب بواسطة :</strong>
                          ماري بايدن
                        </p>
                        <span></span>
                        <p>10/01/2023</p>
                      </div>
                      <div className="meta__right">
                        <Link href="blog">طبيعة</Link>
                        <Link href="blog">صحة</Link>
                      </div>
                    </div>
                  </div>
                  <div className="content ">
                    <h4 className="h4">
                      <Link href="blog-single">
                        نقص التوجيه في الكلاب: إن المكفوفين الذين يقومون
                        بتدريبهم
                      </Link>
                    </h4>
                    <p>
                      نُشرت ديلي ستار نيوز في 2 فبراير 2022 ، سنغباد بروتيدين
                      بتاريخ 31 يناير 2022 و HRCBM تحقيق. بنغلاديش مرة أخرى تشهد
                      تصاعدا في العنف ضد الأقليات في البلاد.
                    </p>
                    <div className="cta">
                      <Link href="blog-single">
                        <i className="fa-sharp fa-regular fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="blog-main__single fade-top">
                  <div className="thumb">
                    <div className="thumb-link ">
                      <Link href="blog-single">
                        <Image src={nine} alt="Image" />
                      </Link>
                      <div className="video-wrap">
                        <button
                          onClick={() => setVideoActive(true)}
                          title="video Player"
                          className="video-btn"
                        >
                          <i className="fa-sharp fa-solid fa-play"></i>
                        </button>
                      </div>
                    </div>
                    <div className="meta">
                      <div className="meta__left">
                        <p>
                          <strong>كتب بواسطة :</strong>
                          ماري بايدن
                        </p>
                        <span></span>
                        <p>10/01/2023</p>
                      </div>
                      <div className="meta__right">
                        <Link href="blog">طبيعة</Link>
                        <Link href="blog">صحة</Link>
                      </div>
                    </div>
                  </div>
                  <div className="content ">
                    <h4 className="h4">
                      <Link href="blog-single">
                        فريق من العلماء من شركة ناسا للدفع النفاث
                      </Link>
                    </h4>
                    <p>
                      نُشرت ديلي ستار نيوز في 2 فبراير 2022 ، سنغباد بروتيدين
                      بتاريخ 31 يناير 2022 و HRCBM تحقيق. بنغلاديش مرة أخرى تشهد
                      تصاعدا في العنف ضد الأقليات في البلاد.
                    </p>
                    <div className="cta">
                      <Link href="blog-single">
                        <i className="fa-sharp fa-regular fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="blog-main__single fade-top">
                  <div className="thumb">
                    <div className="thumb-radio ">
                      <h4 className="h4">أدخل عنوان الصوت هنا</h4>
                      <div className="radio">
                        <div className="audio-player">
                          <audio controls>
                            <source
                              src="https://ia800905.us.archive.org/19/items/FREE_background_music_dhalius/backsound.mp3"
                              type="audio/mp3"
                            />
                          </audio>
                        </div>
                      </div>
                    </div>
                    <div className="meta">
                      <div className="meta__left">
                        <p>
                          <strong>كتب بواسطة :</strong>
                          ماري بايدن
                        </p>
                        <span></span>
                        <p>10/01/2023</p>
                      </div>
                      <div className="meta__right">
                        <Link href="blog">طبيعة</Link>
                        <Link href="blog">صحة</Link>
                      </div>
                    </div>
                  </div>
                  <div className="content ">
                    <h4 className="h4">
                      <Link href="blog-single">
                        هناك أيضًا مصادر طبيعية للميثان - من
                      </Link>
                    </h4>
                    <p>
                      نُشرت ديلي ستار نيوز في 2 فبراير 2022 ، سنغباد بروتيدين
                      بتاريخ 31 يناير 2022 و HRCBM تحقيق. بنغلاديش مرة أخرى تشهد
                      تصاعدا في العنف ضد الأقليات في البلاد.
                    </p>
                    <div className="cta">
                      <Link href="blog-single">
                        <i className="fa-sharp fa-regular fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="pagination-wrapper">
                  <ul className="pagination">
                    <li>
                      <Link href="blog">01</Link>
                    </li>
                    <li>
                      <Link href="blog" className="active">
                        02
                      </Link>
                    </li>
                    <li>
                      <Link href="blog">03</Link>
                    </li>
                    <li>
                      <button>
                        <i className="fa-sharp fa-regular fa-arrow-right"></i>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-12 col-xl-4">
              <div className="blog-main__sidebar">
                <div className="widget ">
                  <div className="widget__head">
                    <h5 className="h5"> بحث</h5>
                  </div>
                  <div className="widget-search">
                    <form action="#" method="post">
                      <div className="form-group-input">
                        <input
                          type="search"
                          name="blog-search"
                          id="blogSearch"
                          placeholder="ابحث هنا. . ."
                        />
                        <button type="submit">
                          <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="widget ">
                  <div className="widget__head">
                    <h5 className="h5"> الفئات</h5>
                  </div>
                  <div className="widget__list">
                    <ul>
                      <li>
                        <Link href="blog"> عمل</Link>
                      </li>
                      <li>
                        <Link href="blog"> سوق العمل</Link>
                      </li>
                      <li>
                        <Link href="blog"> التسويق</Link>
                      </li>
                      <li>
                        <Link href="blog"> أخبار</Link>
                      </li>
                      <li>
                        <Link href="blog"> وسائل التواصل الاجتماعي</Link>
                      </li>
                      <li>
                        <Link href="blog"> الاتجاهات</Link>
                      </li>
                      <li>
                        <Link href="blog"> الكتابة</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="widget">
                  <div className="widget__head">
                    <h5 className="h5"> المشاركات الأخيرة</h5>
                  </div>
                  <div className="widget__latest">
                    <div className="latest-single ">
                      <div className="latest-thumb">
                        <Link href="blog-single">
                          <Image src={ten} alt="Image" />
                        </Link>
                      </div>
                      <div className="latest-content">
                        <p>10/01/2023</p>
                        <p>
                          <Link href="blog-single">
                            نقص التوجيه في الكلاب: الأشخاص الأعمى الذين يتدربون
                            دليلهم الخاص
                          </Link>
                        </p>
                      </div>
                    </div>
                    <div className="latest-single ">
                      <div className="latest-thumb">
                        <Link href="blog-single">
                          <Image src={eleven} alt="Image" />
                        </Link>
                      </div>
                      <div className="latest-content">
                        <p>10/01/2023</p>
                        <p>
                          <Link href="blog-single">
                            نقص التوجيه في الكلاب: الأشخاص الأعمى الذين يتدربون
                            دليلهم الخاص
                          </Link>
                        </p>
                      </div>
                    </div>
                    <div className="latest-single ">
                      <div className="latest-thumb">
                        <Link href="blog-single">
                          <Image src={twelve} alt="Image" />
                        </Link>
                      </div>
                      <div className="latest-content">
                        <p>10/01/2023</p>
                        <p>
                          <Link href="blog-single">
                            نقص التوجيه في الكلاب: الأشخاص الأعمى الذين يتدربون
                            دليلهم الخاص
                          </Link>
                        </p>
                      </div>
                    </div>
                    <div className="latest-single ">
                      <div className="latest-thumb">
                        <Link href="blog-single">
                          <Image src={thirteen} alt="Image" />
                        </Link>
                      </div>
                      <div className="latest-content">
                        <p>10/01/2023</p>
                        <p>
                          <Link href="blog-single">
                            نقص التوجيه في الكلاب: الأشخاص الأعمى الذين يتدربون
                            دليلهم الخاص
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="widget ">
                  <div className="widget__head">
                    <h5 className="h5"> العلامات</h5>
                  </div>
                  <div className="widget__tags">
                    <ul>
                      <li>
                        <Link href="blog">طبيعة</Link>
                      </li>
                      <li>
                        <Link href="blog">صحة</Link>
                      </li>
                      <li>
                        <Link href="blog"> المجرة</Link>
                      </li>
                      <li>
                        <Link href="blog"> إبداعي</Link>
                      </li>
                      <li>
                        <Link href="blog"> فن</Link>
                      </li>
                      <li>
                        <Link href="blog"> عمل</Link>
                      </li>
                      <li>
                        <Link href="blog"> الفضاء</Link>
                      </li>
                      <li>
                        <Link href="blog"> علم الأحياء</Link>
                      </li>
                      <li>
                        <Link href="blog"> البيئة</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="widget widget-big ">
                  <Link href="blog-single">
                    <Image src={fourteen} alt="Image" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        className={(videoActive ? " video-zoom-in" : " ") + " video-backdrop"}
        onClick={() => setVideoActive(false)}
      >
        <div className="video-inner">
          <div
            className="video-container"
            onClick={(e: any) => e.stopPropagation()}
          >
            {videoActive && <YoutubeEmbed embedId="fSv6UgCkuTU" />}
            <button
              aria-label="close video popup"
              className="close-video-popup"
              onClick={() => setVideoActive(false)}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogMain;
