import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import one from "public/images/teams/one.png";

gsap.registerPlugin(ScrollTrigger);
const TeamDetailsMain = () => {
  useEffect(() => {
    const percentElements = document.querySelectorAll("[data-percent]");

    percentElements.forEach((el) => {
      const skillBarPercent = el.querySelector(
        ".skill-bar-percent"
      ) as HTMLElement | null;
      const percentValue = el.parentNode?.querySelector(
        ".percent-value"
      ) as HTMLElement | null;

      if (skillBarPercent && percentValue) {
        const percent = el.getAttribute("data-percent") || "0%";
        skillBarPercent.style.width = percent;
        percentValue.textContent = percent;
      }
    });

    const axProgressBar = document.querySelectorAll(".skill-bar-single");
    axProgressBar.forEach((element) => {
      const skillBarPercent = element.querySelector(
        ".skill-bar-percent"
      ) as HTMLElement | null;
      const percentValue = element.querySelector(
        ".percent-value"
      ) as HTMLElement | null;

      if (skillBarPercent && percentValue) {
        const target = percentValue.textContent || "0%";

        const axBarTimeline = gsap.timeline({
          defaults: {
            duration: 2,
          },
          scrollTrigger: {
            trigger: element,
          },
        });

        axBarTimeline.fromTo(
          skillBarPercent,
          {
            width: 0,
          },
          {
            width: target,
          }
        );

        axBarTimeline.from(
          percentValue,
          {
            textContent: "0%",
            snap: {
              textContent: 5,
            },
          },
          "<"
        );
      }
    });
  }, []);

  return (
    <section className="section pb-0 team-det fade-wrapper">
      <div className="container">
        <div className="row gaper">
          <div className="col-12 col-lg-5 col-xxl-4">
            <div className="team-det__thumb fade-top">
              <Image src={one} alt="Image" />
              <div className="social-alt">
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
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-7 col-xxl-8">
            <div className="team-det__content fade-top">
              <div className="intro">
                <div className="intro-left">
                  <h4>سناء ص. ليش</h4>
                  <p>كبير المهندسين</p>
                </div>
                <div className="intro-right">
                  <Link href="contact-us" className="btn btn--primary">
                    وظفني
                    <i className="fa-sharp fa-solid fa-paper-plane"></i>
                  </Link>
                </div>
              </div>
              <div className="content">
                <h5>أن يتجنب</h5>
                <p>
                  عرض مثال حي لهذا، من منا لم يتحمل جهد بدني شاق إلا من أجل
                  الحصول على ميزة أو فائدة؟ ولكن من لديه الحق أن ينتقد شخص ما
                  أراد أن يشعر بالسعادة التي لا تشوبها عواقب أليمة أو آخر أراد
                  أن يتجنب الألم الذي ربما تنجم عنه بعض المتعة ؟ علي الجانب
                  الآخر نشجب ونستنكر هؤلاء الرجال المفتونون بنشوة اللحظة
                  الهائمون في رغباتهم فلا يدركون ما يعقبها من الألم والأسي
                  المحتم، واللوم كذلك يشمل هؤلاء الذين أخفقوا في واجباتهم نتيجة
                  لضعف إرادتهم
                </p>
              </div>
              <div className="skill-wrap">
                <div className="skill-bar-single">
                  <div className="skill-bar-title">
                    <p>إطار سلكي</p>
                  </div>
                  <div className="skill-bar-wrapper" data-percent="75%">
                    <div className="skill-bar">
                      <div className="skill-bar-percent">
                        <span className="percent-value"></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="skill-bar-single">
                  <div className="skill-bar-title">
                    <p>التصميم المرئي</p>
                  </div>
                  <div className="skill-bar-wrapper" data-percent="90%">
                    <div className="skill-bar">
                      <div className="skill-bar-percent">
                        <span className="percent-value"></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="skill-bar-single">
                  <div className="skill-bar-title">
                    <p>إطار سلكي</p>
                  </div>
                  <div className="skill-bar-wrapper" data-percent="75%">
                    <div className="skill-bar">
                      <div className="skill-bar-percent">
                        <span className="percent-value"></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="skill-bar-single">
                  <div className="skill-bar-title">
                    <p>التصميم المرئي</p>
                  </div>
                  <div className="skill-bar-wrapper" data-percent="90%">
                    <div className="skill-bar">
                      <div className="skill-bar-percent">
                        <span className="percent-value"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="team-det__info fade-top">
              <h4>الخلفية التعليمية</h4>
              <div className="group">
                <h5>
                  درجة البكالريوس،
                  <span>2010</span>
                </h5>
                <p>
                  عرض مثال حي لهذا، من منا لم يتحمل جهد بدني شاق إلا من أجل
                  الحصول على ميزة أو فائدة؟ ولكن من لديه الحق أن ينتقد شخص ما
                  أراد أن يشعر بالسعادة التي لا تشوبها عواقب أليمة أو آخر أراد
                  أن يتجنب الألم الذي ربما تنجم عنه بعض المتعة ؟ علي الجانب
                  الآخر نشجب ونستنكر هؤلاء الرجال المفتونون بنشوة اللحظة
                  الهائمون في رغباتهم فلا يدركون ما يعقبها من الألم والأسي
                  المحتم، واللوم كذلك يشمل هؤلاء الذين أخفقوا في واجباتهم نتيجة
                  لضعف إرادتهم
                </p>
              </div>
              <div className="group">
                <h5>
                  ماجستير في التصميم ،<span>2015</span>
                </h5>
                <p>
                  عرض مثال حي لهذا، من منا لم يتحمل جهد بدني شاق إلا من أجل
                  الحصول على ميزة أو فائدة؟ ولكن من لديه الحق أن ينتقد شخص ما
                  أراد أن يشعر بالسعادة التي لا تشوبها عواقب أليمة أو آخر أراد
                  أن يتجنب الألم الذي ربما تنجم عنه بعض المتعة ؟ علي الجانب
                  الآخر نشجب ونستنكر هؤلاء الرجال المفتونون بنشوة اللحظة
                  الهائمون في رغباتهم فلا يدركون ما يعقبها من الألم والأسي
                  المحتم، واللوم كذلك يشمل هؤلاء الذين أخفقوا في واجباتهم نتيجة
                  لضعف إرادتهم
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamDetailsMain;
