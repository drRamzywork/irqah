import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import poster from "public/images/projects/poster.png";
import iconone from "public/images/projects/icon-one.png";
import icontwo from "public/images/projects/icon-two.png";
import iconthree from "public/images/projects/icon-three.png";
import done from "public/images/projects/d-one.png";
import dtwo from "public/images/projects/d-two.png";
import dthree from "public/images/projects/d-three.png";
import dfour from "public/images/projects/d-four.png";
import dfive from "public/images/projects/d-five.png";

const ProjectDetailsMain = () => {
  return (
    <section className="section project-d">
      <div className="container">
        <div className="row gaper">
          <div className="col-12 col-lg-6">
            <div className="project-d-group">
              <h3 className="light-title-lg">هندسة خارطة الطريق</h3>
              <p>
                هناك العديد من الاختلافات في كلمات لوريم إيبسوم الذات من
                التغييرات التدريجية من عمارة عانى من تغيير في شكل ما ، عن طريق
                الفكاهة المحقونة ، أو الكلمات العشوائية التي لا تفعل ذلك تبدو
                مقبولة بعض الشيء. إذا كنت ستستخدم مقطعًا من لوريم إيبسوم ، فأنت
                بحاجة إلى التأكد من عدم وجود أي شيء محرج مخفي في منتصف النص. كل
                ال تميل مولدات Lorem Ipsum على الإنترنت إلى كرر القطع المحددة
                مسبقًا حسب الضرورة ،
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="project-d-group">
              <h3 className="light-title-lg">يشمل المشروع</h3>
              <p>
                هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء سيلهي
                القارئ عن التركيز من الصفحة عند النظر إلى تخطيطها. الهدف من
                استخدام لوريم إيبسوم.
              </p>
              <ul>
                <li>التنوع الجغرافي ، تعقيد المشروع</li>
                <li>سواء كان البناء على الأرض أو فوق الماء</li>
                <li>تستجيب شركات المقاولات للاحتياجات الفريدة</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="poster__slider-wrapper">
              <div className="poster__slider-w">
                <Swiper
                  slidesPerView={1}
                  spaceBetween={30}
                  slidesPerGroup={1}
                  speed={800}
                  loop={true}
                  centeredSlides={false}
                  modules={[Autoplay, Navigation]}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }}
                  navigation={{
                    nextEl: ".next-project-d",
                    prevEl: ".prev-project-d",
                  }}
                  className="poster__slider"
                >
                  <SwiperSlide>
                    <div className="poster__slider-single">
                      <Image src={poster} alt="Image" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="poster__slider-single">
                      <Image src={poster} alt="Image" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="poster__slider-single">
                      <Image src={poster} alt="Image" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="poster__slider-single">
                      <Image src={poster} alt="Image" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="poster__slider-single">
                      <Image src={poster} alt="Image" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="poster__slider-single">
                      <Image src={poster} alt="Image" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="poster__slider-single">
                      <Image src={poster} alt="Image" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="poster__slider-single">
                      <Image src={poster} alt="Image" />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="slide-group">
                <button
                  aria-label="next item"
                  className="slide-btn next-project-d"
                >
                  <i className="fa-light fa-angle-right"></i>
                </button>
                <button
                  aria-label="previous item"
                  className="slide-btn prev-project-d"
                >
                  <i className="fa-light fa-angle-left"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row gaper fade-wrapper">
          <div className="col-12 col-sm-6 col-xl-4">
            <div className="project-d-o__single fade-top">
              <div className="content">
                <h5>القطاعات</h5>
                <p>الطرق والطرق السريعة</p>
              </div>
              <div className="thumb">
                <Image src={iconone} alt="Image" />
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-4">
            <div className="project-d-o__single fade-top">
              <div className="content">
                <h5>مالك</h5>
                <p>بعض الشركات</p>
              </div>
              <div className="thumb">
                <Image src={icontwo} alt="Image" />
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-4">
            <div className="project-d-o__single fade-top">
              <div className="content">
                <h5>تاريخ المشروع</h5>
                <p>تبدأ: 2021 - تنتهي: 2023</p>
              </div>
              <div className="thumb">
                <Image src={iconthree} alt="Image" />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="details-group text-end section__content-cta">
              <h3 className="light-title-lg">وصف المشروع</h3>
              <p>
                هناك العديد من الاختلافات في كلمات لوريم إيبسوم الذات من
                التغييرات التدريجية من عمارة عانى من تغيير في شكل ما ، عن طريق
                الفكاهة المحقونة ، أو الكلمات العشوائية التي لا تفعل ذلك تبدو
                مقبولة بعض الشيء. إذا كنت ستستخدم مقطعًا من لوريم إيبسوم ، فأنت
                بحاجة إلى التأكد من عدم وجود أي شيء محرج مخفي في منتصف النص. كل
                ال التغييرات التدريجية من الذات مساحة و قطع حسب الضرورة
              </p>
              <p>
                هناك العديد من الاختلافات في كلمات لوريم إيبسوم الذات من
                التغييرات التدريجية من عمارة عانى من تغيير في شكل ما ، عن طريق
                الفكاهة المحقونة ، أو الكلمات العشوائية التي لا تفعل ذلك تبدو
                مقبولة بعض الشيء. إذا كنت ستستخدم مقطعًا من لوريم إيبسوم ، فأنت
                بحاجة إلى التأكد من عدم وجود أي شيء محرج مخفي في منتصف النص. كل
                ال تميل مولدات Lorem Ipsum على الإنترنت إلى كرر القطع المحددة
                مسبقًا حسب الضرورة ،
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="quote-pj">
              <div className="cont">
                <div className="quote">
                  <i className="fa-solid fa-quote-right"></i>
                </div>
                <blockquote className="secondary-text">
                  وجاء اليوم الذي بقيت فيه المخاطرة ضيقة في مهدها كان أكثر
                  إيلامًا من خطر الازدهار.
                </blockquote>
              </div>
              <div className="author">
                <h4>- بيلي ريوس</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="details-group text-end section__content-cta">
              <h3 className="light-title-lg">النتائج</h3>
              <p>
                هناك العديد من الاختلافات في كلمات لوريم إيبسوم الذات من
                التغييرات التدريجية من عمارة عانى من تغيير في شكل ما ، عن طريق
                الفكاهة المحقونة ، أو الكلمات العشوائية التي لا تفعل ذلك تبدو
                مقبولة بعض الشيء. إذا كنت ستستخدم مقطعًا من لوريم إيبسوم ، فأنت
                بحاجة إلى التأكد من عدم وجود أي شيء محرج مخفي في منتصف النص. كل
                ال التغييرات التدريجية من الذات مساحة و قطع حسب الضرورة
              </p>

              <p>
                هناك العديد من الاختلافات في كلمات لوريم إيبسوم الذات من
                التغييرات التدريجية من عمارة عانى من تغيير في شكل ما ، عن طريق
                الفكاهة المحقونة ، أو الكلمات العشوائية التي لا تفعل ذلك تبدو
                مقبولة بعض الشيء. إذا كنت ستستخدم مقطعًا من لوريم إيبسوم ، فأنت
                بحاجة إلى التأكد من عدم وجود أي شيء محرج مخفي في منتصف النص. كل
                ال تميل مولدات Lorem Ipsum على الإنترنت إلى كرر القطع المحددة
                مسبقًا حسب الضرورة ،
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="project-d__slider-w section__content-cta">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          slidesPerGroup={1}
          speed={800}
          loop={true}
          centeredSlides={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            1400: {
              slidesPerView: 5,
              centeredSlides: true,
            },
            1200: {
              slidesPerView: 4,
            },
            992: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 2,
            },
          }}
          className="project-d__slider"
        >
          <SwiperSlide>
            <div className="project-d__slider-single">
              <Image src={done} alt="Image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-d__slider-single">
              <Image src={dtwo} alt="Image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-d__slider-single">
              <Image src={dthree} alt="Image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-d__slider-single">
              <Image src={dfour} alt="Image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-d__slider-single">
              <Image src={dfive} alt="Image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-d__slider-single">
              <Image src={done} alt="Image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-d__slider-single">
              <Image src={dtwo} alt="Image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-d__slider-single">
              <Image src={dthree} alt="Image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-d__slider-single">
              <Image src={dfour} alt="Image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-d__slider-single">
              <Image src={dfive} alt="Image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-d__slider-single">
              <Image src={done} alt="Image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-d__slider-single">
              <Image src={dtwo} alt="Image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-d__slider-single">
              <Image src={dthree} alt="Image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-d__slider-single">
              <Image src={dfour} alt="Image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-d__slider-single">
              <Image src={dfive} alt="Image" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default ProjectDetailsMain;
