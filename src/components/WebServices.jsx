import React from "react";
import Card from "@/components/Card";
import { django, djangores, frontend1, frontend2, frontend3 } from "@/app/utils/Languages";
import CardR from "@/components/CardR";

function WebServices() {
  return (
    <>
    <Card
      type="Backend"
      title="تطوير الواجهة الخلفية"
      desc="تطوير الواجهة الخلفية باستخدام Django وPython يتيح بناء تطبيقات ويب قوية وفعالة. Django يوفر إطار عمل متكامل، بينما تتيح SQLite، MySQL، وPostgreSQL خيارات مرنة لتخزين وإدارة البيانات، من التطبيقات البسيطة إلى الكبيرة"
      langs={django}
      mainImage="/django.jpeg"
    />
  
    <CardR
      type="Backend"
      title="واجهة برمجة تطبيقات"
      desc="بناء خلفية باستخدام Django REST Framework (DRF) يمكّن من إنشاء واجهات برمجة تطبيقات قوية ومرنة لتطبيقات الويب والجوال. يُبسط DRF عملية تصميم واجهات برمجة التطبيقات من خلال توفير أدوات مثل serializers و viewsets وآليات المصادقة. يدعم ميزات مثل الترقيم والتصفية والمصادقة بشكل مباشر، مما يسهل بناء واجهات برمجة تطبيقات آمنة وقابلة للتوسع تتكامل بسلاسة مع تطبيقات الواجهة الأمامية والخدمات الأخرى."
      langs={djangores}
      mainImage="/drest.png"
    />
  
    <Card
      type="Frontend"
      title="الواجهة الأمامية باستخدام HTML,CSS,JS"
      desc="بناء واجهة أمامية باستخدام HTML و CSS و JavaScript يشكل أساس تطوير الويب. توفر HTML الهيكل والمحتوى لصفحات الويب، بينما تُستخدم CSS للتصميم والتخطيط وإضفاء الشكل الجمالي لإنشاء واجهات جذابة وسريعة الاستجابة. تضيف JavaScript التفاعلية والوظائف الديناميكية، مما يتيح للمستخدمين التفاعل مع عناصر الصفحة مثل الرسوم المتحركة، والتحقق من صحة النماذج، وجلب البيانات."
      langs={frontend1}
      mainImage="/front1.png"
    />
  
    <CardR
      type="Frontend"
      title="الواجهة الأمامية باستخدام React JS"
      desc="قم ببناء تطبيقات ويب حديثة باستخدام React.js، مع تصميمها باستخدام SASS و Bootstrap و Tailwind CSS لواجهة أنيقة وسريعة الاستجابة. يضمن هيكل React المعتمد على المكونات تجربة مستخدم سريعة وديناميكية، بينما يتيح التكامل السلس مع واجهات برمجة التطبيقات الاتصال في الوقت الحقيقي مع الخلفية. هذه المجموعة القوية توفر تطبيقات تفاعلية للغاية وجذابة بصريًا مصممة حسب احتياجاتك."
      langs={frontend2}
      mainImage="/react.jpeg"
    />
  
    <Card
      type="Frontend"
      title="الواجهة الأمامية باستخدام Next JS"
      desc="قم ببناء تطبيقات ويب متطورة باستخدام Next.js، مع تصميمها باستخدام SASS و Bootstrap و Tailwind CSS لتصميم نظيف وسريع الاستجابة. يوفر Next.js العرض من جهة الخادم لصفحات أسرع ومحسّنة لمحركات البحث، بينما يضمن التكامل السلس مع واجهات برمجة التطبيقات الاتصال في الوقت الحقيقي مع الخلفية. يخلق هذا المزيج تطبيقات تفاعلية وديناميكية للغاية مصممة حسب احتياجاتك."
      langs={frontend3}
      mainImage="/next.jpg"
    />
  </>
  
  );
}

export default WebServices;
