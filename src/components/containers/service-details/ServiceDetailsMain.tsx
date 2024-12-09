import React from "react";
import Image from "next/image";
import thumbone from "public/images/service/thumb-one.png";
import thumbtwo from "public/images/service/thumb-two.png";

const ServiceDetailsMain = () => {
  return (
    <section className="section service-details fade-wrapper">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-10">
            <div className="service-details__slider">
              <div className="service-details__slider-single">
                <div className="poster fade-top">
                  <Image src={thumbone} alt="Image" />
                </div>
                <div className="details-group section__cta text-end">
                  <h3 className="title-anim">لماذا نستخدمه؟</h3>
                  <p>
                    هناك حقيقة مثبتة منذ زمن طويل وهي أن المقروء سيلهي القارئ عن
                    التركيز محتوى الصفحة عند النظر إلى تخطيطها. الهدف من استخدام
                    لوريم إيبسوم هو أنه يحتوي على توزيع طبيعي إلى حد ما للأحرف ،
                    بدلاً من الاستخدام &quot;المحتوى هنا ، المحتوى هن&quot; ، مما يجعلها
                    تبدو مثل الإنجليزية المقروءة.
                  </p>
                  <p>
                    هناك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم ، لكن
                    الأغلبية متوفرة عانت من تغيير في شكل ما ، عن طريق الدعابة
                    المحقونة ، أو الكلمات العشوائية التي لا تبدو معقولة حتى
                    قليلاً. إذا كنت ستستخدم فقرة من لوريم إيبسوم ، عليك التأكد
                    من عدم وجود أي شيء محرج مخفي في ملف منتصف النص. تميل جميع
                    مولدات Lorem Ipsum على الإنترنت إلى كرر القطع المحددة مسبقًا
                    حسب الضرورة ،
                  </p>
                </div>
                <div className="section__content-cta">
                  <div className="row gaper">
                    <div className="col-12 col-lg-7">
                      <div className="details-group">
                        <h3 className="title-anim">نهجنا</h3>
                        <p>
                          نحن نستخدم استراتيجيات تصميم المواقع التي أثبتت جدواها
                          في كل عمل ، سواء كان موقعًا إعلاميًا بسيطًا أو تجارة
                          إلكترونية كاملة موقع إلكتروني.
                        </p>
                        <p>
                          أولاً ، نقوم بإنشاء خرائط مواقع ، وتدفق المستخدم ،
                          وإطار سلكي لصقل ملفات الرسالة والتفاعل المطلوب. ثم
                          يأتي دورنا الرائع من الناحية الجمالية تصميمات. تم
                          تحسين كل تصميم للجوال وسطح المكتب لإنشاء ملف ثابت.
                        </p>
                      </div>
                    </div>
                    <div className="col-12 col-lg-5">
                      <div className="poster-small">
                        <Image src={thumbtwo} alt="Image" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailsMain;
