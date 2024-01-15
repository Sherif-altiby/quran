import "./Boukhary.scss";
import { useMainContext } from "../../Context/MainContext";
import { hadithBoukharyCategories } from "../../components/Data/BoukharyData";
import { useNavigate } from "react-router-dom";


const Boukhary = () => {
  const { theme } = useMainContext();
  const navigate = useNavigate();

  const handleHadithCategory = (categoryName) => {
    const collection = "Sahih Bukhari";
    const  category = categoryName;
    localStorage.setItem("category", category);
    localStorage.setItem("collection", collection);
    navigate("/hadith");
  };

  return (
    <div className={`boukhary ${theme}`}>
      <div className="container">
        <h1>   أَبُو عَبْدِ ٱللَّٰه مُحَمَّدُ بْنُ إِسْمَاعِيْلَ ٱلْبُخَارِيّ  </h1> 
        <h3>
        (13
          شوال 194 هـ - 1 شوال 256 هـ) / (20 يوليو 810 م - 1 سبتمبر 870 م) هو
          أحد كبار الحفّاظ(1) الفقهاء من أهم علماء الحديث وعلوم الرجال والجرح
          والتعديل والعلل عند أهل السنة والجماعة، له مصنّفات كثيرة أبرزها كتاب
          الجامع الصحيح، المشهور باسم صحيح البخاري، الذي يعد أوثق الكتب الستة
          الصحاح والذي أجمع علماء أهل السنة والجماعة أنه أصح الكتب بعد القرآن
          الكريم. وقد أمضى في جمعه وتصنيفه ستة عشر عاماً. نشأ يتيماً وطلب العلم
          منذ صغره ورحل في أرجاء العالم الإسلامي رحلة طويلة للقاء العلماء وطلب
          الحديث وسمع من قرابة ألف شيخ، وجمع حوالي ستمائة ألف حديث. اشتهر شهرة
          واسعة وأقرّ له أقرانه وشيوخه ومن جاء بعده من العلماء بالتقدّم والإمامة
          في الحديث وعلومه، حتّى لقّب بأمير المؤمنين في الحديث.(2) وتتلمذ عليه
          كثير من كبار أئمة الحديث كمسلم بن الحجاج وابن خزيمة والترمذي وغيرهم،
          وهو أول من وضع في الإسلام كتاباً مجرّداً للحديث الصحيح. ومن أوّل من
          ألّف في تاريخ الرجال. امتُحن أواخر حياته وتُعصّب عليه حتى أُخرج من
          نيسابور وبخارى فنزل إحدى قرى سمرقند فمرض وتوفِّي بها.
        </h3>
        <div className="all_categories">
          {hadithBoukharyCategories.map((item) => (
            <div
              className="category"
              key={item.id}
              onClick={() => handleHadithCategory(item.nameEn)}
            >
              {item.nameAr}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Boukhary;
