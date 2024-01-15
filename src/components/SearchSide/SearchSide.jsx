import "./SearchSide.scss";
import { useMainContext } from "../../Context/MainContext";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";



export const allSurahsArabicWithId = [
  { id: 1, name: "الفاتحة" },
  { id: 2, name: "البقرة" },
  { id: 3, name: "آل عمران" },
  { id: 4, name: "النساء" },
  { id: 5, name: "المائدة" },
  { id: 6, name: "الأنعام" },
  { id: 7, name: "الأعراف" },
  { id: 8, name: "الأنفال" },
  { id: 9, name: "التوبة" },
  { id: 10, name: "يونس" },
  { id: 11, name: "هود" },
  { id: 12, name: "يوسف" },
  { id: 13, name: "الرعد" },
  { id: 14, name: "إبراهيم" },
  { id: 15, name: "الحجر" },
  { id: 16, name: "النحل" },
  { id: 17, name: "الإسراء" },
  { id: 18, name: "الكهف" },
  { id: 19, name: "مريم" },
  { id: 20, name: "طه" },
  { id: 21, name: "الأنبياء" },
  { id: 22, name: "الحج" },
  { id: 23, name: "المؤمنون" },
  { id: 24, name: "النور" },
  { id: 25, name: "الفرقان" },
  { id: 26, name: "الشعراء" },
  { id: 27, name: "النمل" },
  { id: 28, name: "القصص" },
  { id: 29, name: "العنكبوت" },
  { id: 30, name: "الرّوم" },
  { id: 31, name: "لقمان" },
  { id: 32, name: "السجدة" },
  { id: 33, name: "الأحزاب" },
  { id: 34, name: "سبأ" },
  { id: 35, name: "فاطر" },
  { id: 36, name: "يس" },
  { id: 37, name: "الصافات" },
  { id: 38, name: "ص" },
  { id: 39, name: "الزمر" },
  { id: 40, name: "غافر" },
  { id: 41, name: "فصلت" },
  { id: 42, name: "الشورى" },
  { id: 43, name: "الزخرف" },
  { id: 44, name: "الدّخان" },
  { id: 45, name: "الجاثية" },
  { id: 46, name: "الأحقاف" },
  { id: 47, name: "محمد" },
  { id: 48, name: "الفتح" },
  { id: 49, name: "الحجرات" },
  { id: 50, name: "ق" },
  { id: 51, name: "الذاريات" },
  { id: 52, name: "الطور" },
  { id: 53, name: "النجم" },
  { id: 54, name: "القمر" },
  { id: 55, name: "الرحمن" },
  { id: 56, name: "الواقعة" },
  { id: 57, name: "الحديد" },
  { id: 58, name: "المجادلة" },
  { id: 59, name: "الحشر" },
  { id: 60, name: "الممتحنة" },
  { id: 61, name: "الصف" },
  { id: 62, name: "الجمعة" },
  { id: 63, name: "المنافقون" },
  { id: 64, name: "التغابن" },
  { id: 65, name: "الطلاق" },
  { id: 66, name: "التحريم" },
  { id: 67, name: "الملك" },
  { id: 68, name: "القلم" },
  { id: 69, name: "الحاقة" },
  { id: 70, name: "المعارج" },
  { id: 71, name: "نوح" },
  { id: 72, name: "الجن" },
  { id: 73, name: "المذمل" },
  { id: 74, name: "المدثر" },
  { id: 75, name: "القيامة" },
  { id: 76, name: "الانسان" },
  { id: 77, name: "المرسلات" },
  { id: 78, name: "النبا" },
  { id: 79, name: "النازعات" },
  { id: 80, name: "عبث" },
  { id: 81, name: "التكوير" },
  { id: 82, name: "الانفطار" },
  { id: 83, name: "المطففين" },
  { id: 84, name: "الانشقاق" },
  { id: 85, name: "البروج" },
  { id: 86, name: "الطارق" },
  { id: 87, name: "الاعلى" },
  { id: 88, name: "الغاشية" },
  { id: 89, name: "الفجر" },
  { id: 90, name: "البلد" },
  { id: 91, name: "الشمس" },
  { id: 92, name: "الليل" },
  { id: 93, name: "الضحى" },
  { id: 94, name: "الشرح" },
  { id: 95, name: "التين" },
  { id: 96, name: "العلق" },
  { id: 97, name: "القدر" },
  { id: 98, name: "البينة" },
  { id: 99, name: "الذلذلة" },
  { id: 100, name: "العاديات" },
  { id: 101, name: "القارعة" },
  { id: 102, name: "التكاثر" },
  { id: 103, name: "العصر" },
  { id: 104, name: "الهمزة" },
  { id: 105, name: "الفيل" },
  { id: 106, name: "قريش" },
  { id: 107, name: "الماعون" },
  { id: 108, name: "الكوثر" },
  { id: 109, name: "الكافرون" },
  { id: 110, name: "النصر" },
  { id: 111, name: "المسد" },
  { id: 112, name: "الاخلاص" },
  { id: 113, name: "الفلق" },
  { id: 114, name: "الناس" },
];


const SearchSide = () => {
  const { theme, searchBlock, setSearchBlock, setSurahNumber } =
    useMainContext();
  const navigate = useNavigate();
  const searchClass = searchBlock === true ? " block" : " noblock";
  const myRef = useRef();
  const [searchValue, setSearchValue] = useState("");
  const [surah, setSurah] = useState([]);

  useEffect(() => {
    if (searchValue !== null && searchValue.length >= 1) {
      const matchingSurahs = allSurahsArabicWithId.filter((item) =>
        item.name.includes(searchValue)
      );

      setSurah(matchingSurahs);
    } else {
      setSurah([]);
    }
  }, [searchValue]);


  const handleClick = (number) => {
    setSurahNumber(number);
    navigate("/read-surah");
    setSearchBlock(false);
  };

  const handleAyahClick = () => {
    navigate("/read-ayah");
    setSearchBlock(false);
  };
  return (
    <div className={"search_side " + theme + searchClass}>
      <div className="search_headrer">
        <div className="exite" onClick={() => setSearchBlock(false)}>
          X
        </div>
        <input
          type="text"
          placeholder="بحث"
          ref={myRef}
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
        />
        <div className="icon">
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
      {surah.length > 0 ? (
        <div className="search_surah">
          {surah.map((item) => (
            <div className="surah" key={item.id} onClick={()=>handleClick(item.id)}  >
              {item.name}
            </div>
          ))}
        </div>
      ) : (
        <>
          <div className="common_search">
            <h3> عمليات البحث الشائعة </h3>
            <ul>
              <li onClick={() => handleClick(67)}>
                <div className="text"> الملك </div>
                <div className="icon">
                  <i className="fa-solid fa-arrow-left"></i>
                </div>
              </li>
              <li onClick={() => handleClick(71)}>
                <div className="text"> نوح </div>
                <div className="icon">
                  <i className="fa-solid fa-arrow-left"></i>
                </div>
              </li>
              <li onClick={() => handleClick(18)}>
                <div className="text"> الكهف </div>
                <div className="icon">
                  <i className="fa-solid fa-arrow-left"></i>
                </div>
              </li>
              <li onClick={() => handleClick(36)}>
                <div className="text"> يس </div>
                <div className="icon">
                  <i className="fa-solid fa-arrow-left"></i>
                </div>
              </li>
            </ul>
          </div>
          <div className="try_search">
            <h3> حاول البحث عن </h3>
            <ul>
              <li onClick={() => handleClick(1)}>
                <div className="text"> جزء 1 </div>
                <div className="icon">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </div>
              </li>
              <li onClick={() => handleClick(1)}>
                <div className="text"> صفحة 1 </div>
                <div className="icon">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </div>
              </li>
              <li onClick={() => handleClick(36)}>
                <div className="text"> يس </div>
                <div className="icon">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </div>
              </li>
              <li onClick={() => handleClick(36)}>
                <div className="text"> 36 </div>
                <div className="icon">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </div>
              </li>
              <li>
                <div className="text" onClick={() => handleAyahClick()}>
                  2:255
                </div>
                <div className="icon">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </div>
              </li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default SearchSide;
