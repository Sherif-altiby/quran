import "./WhatToRead.scss";
import { useMainContext } from "../../Context/MainContext";
import { Link } from "react-router-dom";
import { allSurahsArabicWithId } from "../SearchSide/SearchSide";
import { useEffect, useState } from "react";

const WhatToRead = () => {
  const { theme, writeClase, setWriteClass, setSurahNumber } = useMainContext();
  const [search, setSearch] = useState("");
  const [surah, setSurah] = useState([]);
  const blockClass = writeClase === true ? " block" : " ";

  const handleClick = (number) => {
    setWriteClass(false);
    setSurahNumber(number);
  };

  useEffect(() => {
    if (search !== null && search.length >= 1) {
      const result = allSurahsArabicWithId.filter((item) => item.name.includes(search));
      setSurah(result);
    }else {
      setSurah([]);
    }
  }, [search]);

  return (
    <div className={"what_to_read " + theme + blockClass}>
      <div className="overlay" onClick={() => setWriteClass(false)}></div>
      <div className="text_read">
        <div className="search">
          <input
            type="text"
            placeholder="ماذا تريد ان تقرأ"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <div className="icon">
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
        <div className="search_result">
          <div className="default">
            {surah.length > 0 ? (
              <ul>
                {
                  surah.map((item) => (<li key={item.id} > 
                    <Link to="/read-surah" onClick={() => handleClick(item.id)} > 
                    <div className="text">  {item.name} </div>
                    <div className="icon">
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                     </Link>
                   </li>))
                }
              </ul>
            ) : (
              <ul>
                <li>
                  <h4> حاول الانقال الي </h4>
                </li>
                <li>
                  <Link to="/read-surah" onClick={() => handleClick(14)}>
                    <div className="text"> سورة ابراهيم </div>
                    <div className="icon">
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/read-surah" onClick={() => handleClick(112)}>
                    <div className="text"> سورة الاخلاص </div>
                    <div className="icon">
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/read-surah" onClick={() => handleClick(55)}>
                    <div className="text"> سورة الرحمن </div>
                    <div className="icon">
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/read-surah" onClick={() => handleClick(1)}>
                    <div className="text"> الصفحة 1 </div>
                    <div className="icon">
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/read-surah" onClick={() => handleClick(36)}>
                    <div className="text"> سورة يس </div>
                    <div className="icon">
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/read-ayah" onClick={() => setWriteClass(false)}>
                    <div className="text"> اية الكرسي </div>
                    <div className="icon">
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatToRead;
