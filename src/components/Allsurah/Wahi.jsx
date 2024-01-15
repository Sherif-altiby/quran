import React from "react";
import { useMainContext } from "../../Context/MainContext";
import { useNavigate } from "react-router-dom";


export const data = [
  { id: 1, nameOfSurah: "العلق", numberOfQuran: 96, type: "مكية" },
  { id: 2, nameOfSurah: "القلم", numberOfQuran: 68, type: "مكية" },
  { id: 3, nameOfSurah: "المزمل", numberOfQuran: 73, type: "مكية" },
  { id: 4, nameOfSurah: "المدثر", numberOfQuran: 74, type: "مكية" },
  { id: 5, nameOfSurah: "الفاتحة", numberOfQuran: 1, type: "مكية" },
  { id: 6, nameOfSurah: "المسد", numberOfQuran: 111, type: "مكية" },
  { id: 7, nameOfSurah: "التكوير", numberOfQuran: 81, type: "مكية" },
  { id: 8, nameOfSurah: "الاعلى", numberOfQuran: 87, type: "مكية" },
  { id: 9, nameOfSurah: "الليل", numberOfQuran: 92, type: "مكية" },

  { id: 10, nameOfSurah: "الفجر", numberOfQuran: 89, type: "مكية" },
  { id: 11, nameOfSurah: "الضحى", numberOfQuran: 93, type: "مكية" },
  { id: 12, nameOfSurah: "الشرح", numberOfQuran: 94, type: "مكية" },
  { id: 13, nameOfSurah: "العصر", numberOfQuran: 103, type: "مكية" },
  { id: 14, nameOfSurah: "العاديات", numberOfQuran: 100, type: "مكية" },
  { id: 15, nameOfSurah: "الكوثر", numberOfQuran: 108, type: "مكية" },
  { id: 16, nameOfSurah: "التكاثر", numberOfQuran: 102, type: "مكية" },
  { id: 17, nameOfSurah: "الماعون", numberOfQuran: 107, type: "مكية" },
  { id: 18, nameOfSurah: "الكافرون", numberOfQuran: 109, type: "مكية" },
  { id: 19, nameOfSurah: "الفيل", numberOfQuran: 105, type: "مكية" },
  { id: 20, nameOfSurah: "الفلق", numberOfQuran: 113, type: "مكية" },

  { id: 21, nameOfSurah: "الناس", numberOfQuran: 114, type: "مكية" },
  { id: 22, nameOfSurah: "الاخلاص", numberOfQuran: 112, type: "مكية" },
  { id: 23, nameOfSurah: "النجم", numberOfQuran: 53, type: "مكية" },
  { id: 24, nameOfSurah: "عبس", numberOfQuran: 80, type: "مكية" },
  { id: 25, nameOfSurah: "القدر", numberOfQuran: 97, type: "مكية" },
  { id: 26, nameOfSurah: "الشمس", numberOfQuran: 91, type: "مكية" },
  { id: 27, nameOfSurah: "البروج", numberOfQuran: 85, type: "مكية" },
  { id: 28, nameOfSurah: "التين", numberOfQuran: 95, type: "مكية" },
  { id: 29, nameOfSurah: "قريش", numberOfQuran: 106, type: "مكية" },
  { id: 30, nameOfSurah: "القارعة", numberOfQuran: 101, type: "مكية" },

  { id: 31, nameOfSurah: "القيامة", numberOfQuran: 75, type: "مكية" },
  { id: 32, nameOfSurah: "العمزة", numberOfQuran: 104, type: "مكية" },
  { id: 33, nameOfSurah: "المرسلات", numberOfQuran: 77, type: "مكية" },
  { id: 34, nameOfSurah: "ق", numberOfQuran: 50, type: "مكية" },
  { id: 35, nameOfSurah: "البلد", numberOfQuran: 90, type: "مكية" },
  { id: 36, nameOfSurah: "الطارق", numberOfQuran: 86, type: "مكية" },
  { id: 37, nameOfSurah: "القمر", numberOfQuran: 54, type: "مكية" },
  { id: 38, nameOfSurah: "ص", numberOfQuran: 38, type: "مكية" },
  { id: 39, nameOfSurah: "الاعراف", numberOfQuran: 7, type: "مكية" },
  { id: 40, nameOfSurah: "الجن", numberOfQuran: 72, type: "مكية" },

  { id: 41, nameOfSurah: "يس", numberOfQuran: 36, type: "مكية" },
  { id: 42, nameOfSurah: "الفرقان", numberOfQuran: 25, type: "مكية" },
  { id: 43, nameOfSurah: "فاطر", numberOfQuran: 35, type: "مكية" },
  { id: 44, nameOfSurah: "مريم", numberOfQuran: 19, type: "مكية" },
  { id: 45, nameOfSurah: "طه", numberOfQuran: 20, type: "مكية" },
  { id: 46, nameOfSurah: "الواقعة", numberOfQuran: 56, type: "مكية" },
  { id: 47, nameOfSurah: "الشعراء", numberOfQuran: 26, type: "مكية" },
  { id: 48, nameOfSurah: "النمل", numberOfQuran: 27, type: "مكية" },
  { id: 49, nameOfSurah: "القصص", numberOfQuran: 28, type: "مكية" },
  { id: 50, nameOfSurah: "الاسراء", numberOfQuran: 17, type: "مكية" },

  { id: 51, nameOfSurah: "يونس", numberOfQuran: 10, type: "مكية" },
  { id: 52, nameOfSurah: "هود", numberOfQuran: 11, type: "مكية" },
  { id: 53, nameOfSurah: "يوسف", numberOfQuran: 12, type: "مكية" },
  { id: 54, nameOfSurah: "الحجر", numberOfQuran: 15, type: "مكية" },
  { id: 55, nameOfSurah: "الانعام", numberOfQuran: 6, type: "مكية" },
  { id: 56, nameOfSurah: "الصافات", numberOfQuran: 37, type: "مكية" },
  { id: 57, nameOfSurah: "لقمان", numberOfQuran: 31, type: "مكية" },
  { id: 58, nameOfSurah: "سبأ", numberOfQuran: 34, type: "مكية" },
  { id: 59, nameOfSurah: "الزمر", numberOfQuran: 39, type: "مكية" },
  { id: 60, nameOfSurah: "غافر", numberOfQuran: 40, type: "مكية" },

  { id: 61, nameOfSurah: "فصلت", numberOfQuran: 41, type: "مكية" },
  { id: 62, nameOfSurah: "الشورى", numberOfQuran: 42, type: "مكية" },
  { id: 63, nameOfSurah: "الزخرف", numberOfQuran: 43, type: "مكية" },
  { id: 64, nameOfSurah: "الدخان", numberOfQuran: 44, type: "مكية" },
  { id: 65, nameOfSurah: "الجاثية", numberOfQuran: 45, type: "مكية" },
  { id: 66, nameOfSurah: "الاحقاف", numberOfQuran: 46, type: "مكية" },
  { id: 67, nameOfSurah: "الذاريات", numberOfQuran: 51, type: "مكية" },
  { id: 68, nameOfSurah: "الغاشية", numberOfQuran: 88, type: "مكية" },
  { id: 69, nameOfSurah: "الكهف", numberOfQuran: 81, type: "مكية" },
  { id: 70, nameOfSurah: "النحل", numberOfQuran: 16, type: "مكية" },

  { id: 71, nameOfSurah: "نوح", numberOfQuran: 71, type: "مكية" },
  { id: 72, nameOfSurah: "اياهيم", numberOfQuran: 14, type: "مكية" },
  { id: 73, nameOfSurah: "الانبياء", numberOfQuran: 21, type: "مكية" },
  { id: 74, nameOfSurah: "المؤمنون", numberOfQuran: 23, type: "مكية" },
  { id: 75, nameOfSurah: "السجدة", numberOfQuran: 32, type: "مكية" },
  { id: 76, nameOfSurah: "الطور", numberOfQuran: 52, type: "مكية" },
  { id: 77, nameOfSurah: "الملك", numberOfQuran: 67, type: "مكية" },
  { id: 78, nameOfSurah: "الحاقة", numberOfQuran: 69, type: "مكية" },
  { id: 79, nameOfSurah: "المعارج", numberOfQuran: 70, type: "مكية" },
  { id: 80, nameOfSurah: "النبأ", numberOfQuran: 78, type: "مكية" },

  { id: 81, nameOfSurah: "النازعات", numberOfQuran: 79, type: "مكية" },
  { id: 82, nameOfSurah: "الانفطار", numberOfQuran: 82, type: "مكية" },
  { id: 83, nameOfSurah: "الانشقاق", numberOfQuran: 84, type: "مكية" },
  { id: 84, nameOfSurah: "الروم", numberOfQuran: 30, type: "مكية" },
  { id: 85, nameOfSurah: "العنكبوت", numberOfQuran: 29, type: "مكية" },
  { id: 86, nameOfSurah: "المطففين", numberOfQuran: 83, type: "مكية" },
  { id: 87, nameOfSurah: "البقرة", numberOfQuran: 1, type: "مكية" },
  { id: 88, nameOfSurah: "الانفال", numberOfQuran: 8, type: "مدنية" },
  { id: 89, nameOfSurah: "ال عمران", numberOfQuran: 3, type: "مدنية" },
  { id: 90, nameOfSurah: "الاحزاب", numberOfQuran: 33, type: "مدنية" },

  { id: 91, nameOfSurah: "الممتحنة", numberOfQuran: 60, type: "مدنية" },
  { id: 92, nameOfSurah: "النساء", numberOfQuran: 4, type: "مدنية" },
  { id: 93, nameOfSurah: "الزلزلة", numberOfQuran: 99, type: "مدنية" },
  { id: 94, nameOfSurah: "الحديد", numberOfQuran: 57, type: "مدنية" },
  { id: 95, nameOfSurah: "محمد", numberOfQuran: 47, type: "مدنية" },
  { id: 96, nameOfSurah: "الرعد", numberOfQuran: 13, type: "مدنية" },
  { id: 97, nameOfSurah: "الرحمن", numberOfQuran: 55, type: "مدنية" },
  { id: 98, nameOfSurah: "الانسان", numberOfQuran: 76, type: "مدنية" },
  { id: 99, nameOfSurah: "الطلاق", numberOfQuran: 75, type: "مدنية" },
  { id: 100, nameOfSurah: "البينة", numberOfQuran: 98, type: "مدنية" },

  { id: 101, nameOfSurah: "الحشر", numberOfQuran: 59, type: "مدنية" },
  { id: 102, nameOfSurah: "النور", numberOfQuran: 24, type: "مدنية" },
  { id: 103, nameOfSurah: "الحج", numberOfQuran: 22, type: "مدنية" },
  { id: 104, nameOfSurah: "النافقون", numberOfQuran: 63, type: "مدنية" },
  { id: 105, nameOfSurah: "المجادلة", numberOfQuran: 58, type: "مدنية" },
  { id: 106, nameOfSurah: "الحجرات", numberOfQuran: 49, type: "مدنية" },
  { id: 107, nameOfSurah: "التحريم", numberOfQuran: 66, type: "مدنية" },
  { id: 108, nameOfSurah: "التغابن", numberOfQuran: 64, type: "مدنية" },
  { id: 109, nameOfSurah: "الصف", numberOfQuran: 61, type: "مدنية" },
  { id: 110, nameOfSurah: "الجمعة", numberOfQuran: 62, type: "مدنية" },

  { id: 111, nameOfSurah: "الفتح", numberOfQuran: 48, type: "مدنية" },
  { id: 112, nameOfSurah: "المائدة", numberOfQuran: 5, type: "مدنية" },
  { id: 113, nameOfSurah: "التوبة", numberOfQuran: 9, type: "مدنية" },
  { id: 114, nameOfSurah: "النصر", numberOfQuran: 110, type: "مدنية" },
];

const Wahi = () => {
  const { theme, setSurahNumber } = useMainContext();
  const navigate = useNavigate()

  const handleClick = (number)=>{
    navigate('/read-surah');
    setSurahNumber(number)
  }


  return (
    <div className={"wahie " + theme}>
      <div className="container">
        <div className="wahie_content">
          {data.map((item) => (
            <div className="surah" key={item.numberOfQuran} onClick={()=>handleClick(item.numberOfQuran)} >
              <div className="surah_type"> {item.type} </div>
              <div className="text">
                <div className="surah_info">
                  <div className="surah_name"> {item.nameOfSurah} </div>
                  <div className="surah_number">
                    <div className="nn" > {item.numberOfQuran} </div> <div className="ss" > سورة </div>
                  </div>
                </div>
                <div className="surah_id">
                  <span> {item.id + 1} </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wahi;
