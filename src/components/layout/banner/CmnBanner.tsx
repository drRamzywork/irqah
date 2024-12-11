import React from "react";
import Link from "next/link";

interface BannerProps {
  title?: any;
  navigation?: any;
  parent?: any;
  parentLink?: any;
}

const CmnBanner = ({ title, navigation, parent, parentLink }: BannerProps) => {
  return (
    <>
      <section
        className="cmn-banner bg-img blog"
        style={{ backgroundImage: "url('/images/banner/cmn-banner-bg.png')" }}
      >
        <div className="container">
          <div className="row gaper align-items-center">
            <div className="col-12 col-lg-5 col-xl-7">
              <div className="text-center text-lg-end">
                <h2 className="title ">{title}</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link href="/">
                        <i className="fa-solid fa-house "></i>
                        الرئيسية
                      </Link>
                    </li>
                    {parent && (
                      <li className="breadcrumb-item">
                        <Link href={parentLink}>{parent}</Link>
                      </li>
                    )}
                    <li className="breadcrumb-item active " aria-current="page">
                      {navigation}
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
            <div className="col-12 col-lg-7 col-xl-5">
              <div className="text-center text-lg-end">
                <p className="primary-text">
                  جمعية عرقة الخيرية باب من الخير والعطاء والبذل والإحسان لكل
                  محسن ومتبرع وباذل ودال على الخير ،والموفق من وفقه الله لفعل
                  الخير وبذله والدلالة عليه قال صلى الله عليه وسلم (الدال على
                  الخير كفاعله ) تأسست الجمعية بتاريخ 1430/05/10هـ و سجلت بوزارة
                  الموارد البشرية والتنمية الاجتماعية برقم (489) اننا في جمعية
                  عرقة الخيرية نرحب بالتعاون مع الجميع ليعملوا من خلال الجمعية
                  ومعها لتحقيق ذاتهم ولخدمة مجتمعهم وبناء وطنهم، ونتكامل مع
                  شركائنا في القطاع الحكومي والخاص والقطاع الثالث لنحقق التنمية
                  المستدامة. شعارنا ان نرصد الحاجة ونحفظ كرامة المحتاج نعطي
                  المحتاج حق من حقوقه ونؤهله ليكتفي بنفسه عن سؤال الناس ، ومن
                  هنا ندعو الجميع ليشارك في صناعة النجاح وتحقيق الطموح كلاً على
                  قدر استطاعته .{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CmnBanner;
