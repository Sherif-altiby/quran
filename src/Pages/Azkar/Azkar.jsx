import "./Azkar.scss";
import { useMainContext } from "../../Context/MainContext";
import { Link, Outlet } from "react-router-dom";
import { useRef } from "react";

const Azkar = () => {
  const azkarName = [
    { id: 1, name: "أذكار الصباح", to: "azkar-sabah" },
    { id: 2, name: "أذكار المساء", to: "azkar-massa" },
    { id: 3, name: "أذكار بعد الصلاة", to: "azkar-sallah" },
    { id: 4, name: "أذكار النوم", to: "azkar-sleep" },
    { id: 5, name: "أذكار الاستيقاظ", to: "azkar-wakeup" },
    { id: 6, name: "أذكار الصلاة", to: "azkar-on-sallah" },
    { id: 7, name: "أذكار متفرقة", to: "azkar-random" },
    { id: 8, name: "أذكار الاذان", to: "azkar-azan" },
    { id: 9, name: "أذكار المسجد", to: "azkar-mosque" },
    { id: 10, name: "أذكار الوضوء", to: "azkar-wodoua" },
    { id: 11, name: "أذكار المنزل", to: "azkar-manzel" },
    { id: 13, name: "أذكار الخلاء", to: "azkar-khallaa" },
    { id: 12, name: "أذكار الطعام", to: "azkar-food" },
    { id: 14, name: "أذكار الحج و العمرة", to: "azkar-haj" },
    { id: 15, name: "تسابيح", to: "tsabieh" },
    { id: 16, name: "جوامع الدعاء", to: "goamea-doaa" },
    { id: 17, name: "ادعية نبوية", to: "doaa-nabaouy" },
    { id: 20, name: "دعاء ختم القران الكريم", to: "doaa-endquran" },
    { id: 25, name: "أسماء الله الحسنى", to: "names-allah" },
    { id: 27, name: "الرقية الشرعية", to: "elroukia" },
  ];

  const { theme } = useMainContext();
  const elementRef =  useRef()
  const handleScrolling = ()=>{
    const rect = elementRef.current.getBoundingClientRect()
    window.scrollTo({
      top: rect.top,
      left: 0,
      behavior: "smooth"
    })
  }

  return (
    <div className={`azkar ${theme}`}>
      <div className="container azkar_content">
        <div className="categories">
          {azkarName.map((item) => (
            <div className="zek_name" key={item.id}>
              <Link to={item.to} ref={elementRef} onClick={()=> handleScrolling()} > {item.name} </Link>
            </div>
          ))}
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Azkar;
