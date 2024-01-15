import "./Muslim.scss";
import { useMainContext } from "../../Context/MainContext";
import { muslimHadithCategories } from "../../components/Data/MuslimData";
import { useNavigate } from "react-router-dom";
 
const Muslim = () => {
  const { theme } = useMainContext();
  const navigate = useNavigate()

  const handleHadithCategory = (categoryName) => {
    const collection = "Sahih Muslim";
    const  category = categoryName;
    localStorage.setItem("category", category);
    localStorage.setItem("collection", collection);
    navigate("/hadith");
  };


  return (
    <div className={`muslim ${theme}`}>
      <div className="container">
          <h1>
             أبو الحسين مسلم بن الحجاج بن مسلم بن ورد بن كوشاذ القشيري النيسابوري
          </h1>
        <h3>
          ، من أبرز علماء الحديث عند أهل السنة والجماعة. ولد في نيسابور حوالي
          عام 206 هـ، ونشأ في بيت علم وفضل حيث كان أبوه الحجاج من المشيخة. أقبل
          الإمام مسلم منذ صغره على سماع الحديث وحفظه، وكان أول سماع له عام 218
          هـ وعمره آنذاك اثنتا عشرة سنة. أخذ العلم أولاً عن شيوخ بلاده وسمع
          الكثير من مروياتهم، وكانت له رحلة واسعة في طلب الحديث طاف خلالها
          البلاد الإسلامية عدة مرات، فرحل إلى الحجاز لأداء فريضة الحج والسماع من
          أئمة الحديث وكبار الشيوخ، وزار المدينة النبوية ومكة المكرمة ورحل إلى
          العراق فدخل البصرة وبغداد والكوفة ورحل إلى الشام ومصر والري. فمكث
          قرابة الخمسة عشرة عامًا في طلب الحديث،
        </h3>
        <div className="all_categories">
          {muslimHadithCategories.map((item) => (
            <div
              className="category"
              key={item.id}
              onClick={()=> handleHadithCategory(item.nameEn)}
             >
              {item.nameAr}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Muslim;
// "Sahih Muslim"