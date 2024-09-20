"use client";
import React from "react";
import WebServices from "@/components/WebServices";
import Card from "@/components/Card";
import CardR from "@/components/CardR";
import { ds, sc } from "@/app/utils/Languages";
function page() {
  return (
    <>
      <div className="bg-myback1">
        <div className="px-4 md:py-[100px] py-[70px] sm:container sm:mx-auto">
          <div className="flex flex-col">
            <h1 className="sm:text-4xl text-3xl sm:text-left text-center mb-9 text-myback2">
            </h1>
            <div className="flex flex-col justify-center sm:gap-16 gap-10">
              <WebServices />
            </div>
            <h1 className="sm:text-4xl text-3xl sm:text-right text-center my-9 text-myback2">
            </h1>
            <div className="flex flex-col justify-center sm:gap-16 gap-10">
              <CardR
                type="DataScience"
                title="مشاريع علم البيانات"
                desc="استفد من قوة البيانات من خلال مشاريع علم البيانات الخاصة بنا. من خلال تحليل مجموعات البيانات الكبيرة، نكشف عن رؤى قيمة باستخدام أدوات متقدمة مثل بايثون وPandas والخوارزميات التعلم الآلي. تركز مشاريعنا على تنظيف البيانات، والتصور، والنمذجة التنبؤية، وتحليل الاتجاهات لمساعدة الشركات على اتخاذ قرارات مبنية على البيانات."
                langs={ds}
                mainImage="/ds.jpg"
              />
            </div>
            <h1 className="sm:text-4xl text-3xl sm:text-right text-center my-9 text-myback2">
            </h1>
            <div className="flex flex-col justify-center sm:gap-16 gap-10">
              <Card
                type="Scripting"
                title="مشاريع البرمجة النصية والأتمتة"
                desc="قم بأتمتة المهام المتكررة وتبسيط سير العمل باستخدام البرمجة النصية بلغة بايثون مع مكتبات قوية مثل BeautifulSoup و Selenium. تتيح لك BeautifulSoup جمع البيانات من الويب بكفاءة، مما يساعدك على استخراج البيانات من المواقع بسرعة وسهولة. تضيف Selenium قدرات الأتمتة، مما يتيح التحكم في متصفحات الويب لأداء مهام مثل تقديم النماذج، واستخراج البيانات، وإجراء الاختبارات."
                langs={sc}
                mainImage="/ssc.png"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
