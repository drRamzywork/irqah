import React from "react";
import Link from "next/link";

const Info = () => {
  return (
    <section className="section four-info">
      <div className="container">
        <div className="row gaper align-items-start">
          <div className="col-12 col-lg-6">
            <h2 className="light-title text-uppercase fw-7 title-anim">
              أهلاً بك !
            </h2>
          </div>
          <div className="col-12 col-lg-6">
            <div className="four-info__content">
              <p className="primary-text">
                وكالة إبداعية مستقلة لجميع العلامات التجارية والإعلان وإنتاج
                الأفلام الاحتياجات. مع أسلوب sig طبيعة الخاص بنا.
              </p>
              <p>
                مرحبًا ، أنا دان ، مصمم جرافيك ومهندس مبدع واجتماعي يحب أن يقول
                القصص وخلق المشاعر من خلال فن التجريب والحركة. أنا حاليًا مصمم
                في Visions Design يقوم بمزيج من الرسومات المتحركة وتصميم الويب و
                العلامات التجارية.
              </p>
              <div className="section__content-cta">
                <Link href="contact-us" className="btn btn--primary">
                  اتصل بنا
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
