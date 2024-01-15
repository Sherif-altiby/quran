import "./Seting.scss";
import { useMainContext } from "../../Context/MainContext";
import { useState } from "react";

const Setting = () => {
  const {
    theme,
    settingBlock,
    setSetingBlock,
    setTheme,
    setFontType,
    setFontSize,
    fontSize,
  } = useMainContext();
  
  const blockClass = settingBlock === true ? " block" : "";


  const [lightActive, setLightActive] = useState(
    localStorage.getItem("classLight")
      ? localStorage.getItem("classLight")
      : "active"
  );
  const [darkActive, setDarkActive] = useState(
    localStorage.getItem("classDark")
      ? localStorage.getItem("classDark")
      : "noactive"
  );
  const [roseActive, setRoseActive] = useState(
    localStorage.getItem("classRose")
      ? localStorage.getItem("classRose")
      : "noactive"
  );
  const [naskhActive, setNaskhActive] = useState(
    localStorage.getItem("naskhActive")
      ? localStorage.getItem("naskhActive")
      : "active"
  );
  const [nastalikActive, setnastalikActive] = useState(
    localStorage.getItem("nastalikActive")
      ? localStorage.getItem("nastalikActive")
      : "noactive"
  );
  const [taguidActive, seTaguidActive] = useState(
    localStorage.getItem("taguidActive")
      ? localStorage.getItem("taguidActive")
      : "noactive"
  );

  const handleLightTheme = () => {
    setTheme("light");
    setLightActive("active");
    setDarkActive("notactive");
    setRoseActive("notactive");
    localStorage.setItem("theme", "light");
    localStorage.setItem("classLight", "active");
    localStorage.setItem("classDark", "noactive");
    localStorage.setItem("classRose", "noactive");
  };
  const handleDarkTheme = () => {
    setTheme("dark");
    setLightActive("noactive");
    setDarkActive("active");
    setRoseActive("notactive");
    localStorage.setItem("theme", "dark");
    localStorage.setItem("classLight", "noactive");
    localStorage.setItem("classDark", "active");
    localStorage.setItem("classRose", "noactive");
  };
  const handleRoseTheme = () => {
    setTheme("rose");
    setLightActive("noactive");
    setDarkActive("noactive");
    setRoseActive("active");
    localStorage.setItem("theme", "rose");
    localStorage.setItem("classLight", "noactive");
    localStorage.setItem("classDark", "noactive");
    localStorage.setItem("classRose", "active");
  };
  const handleNaskh = () => {
    setFontType("naskh");
    setNaskhActive("active");
    setnastalikActive("noactive");
    seTaguidActive("noactive");
    localStorage.setItem("naskhActive", "active");
    localStorage.setItem("nastalikActive", "noactive");
    localStorage.setItem("taguidActive", "noactive");
  };
  const handleNastalik = () => {
    setFontType("nastalik");
    setNaskhActive("noactive");
    setnastalikActive("active");
    seTaguidActive("noactive");
    localStorage.setItem("naskhActive", "noactive");
    localStorage.setItem("nastalikActive", "active");
    localStorage.setItem("taguidActive", "noactive");
  };
  const handleTaguid = () => {
    setFontType("taguid");
    setNaskhActive("noactive");
    setnastalikActive("noactive");
    seTaguidActive("active");
    localStorage.setItem("naskhActive", "noactive");
    localStorage.setItem("nastalikActive", "noactive");
    localStorage.setItem("taguidActive", "active");
  };

  const handleFontSizeIncrement = () => {
    setFontSize((preve) => preve + 1);
  };
  const handleFontSizeDecrement = () => {
    setFontSize((preve) => preve - 1);
  };

  const handleReturnSetting = ()=>{
    localStorage.clear();
    window.location.reload();
  }

  return (
    <div className={"setting " + theme + blockClass}>
      <div className="setting_header">
        <div className="exite" onClick={() => setSetingBlock(false)}>
          X
        </div>
        <h3> الاعدادات </h3>
      </div>
      <div className="theme">
        <h3> السمة </h3>
        <ul>
          <li className={lightActive} onClick={() => handleLightTheme()}>
            <div className="text"> فاتح </div>
            <div className="icon">
              <i className="fa-regular fa-sun"></i>
            </div>
          </li>
          <li className={roseActive} onClick={() => handleRoseTheme()}>
            <div className="text"> روز </div>
            <div className="icon">
              <i className="fa-solid fa-cloud-sun"></i>
            </div>
          </li>
          <li className={darkActive} onClick={() => handleDarkTheme()}>
            <div className="text"> داكن </div>
            <div className="icon">
              <i className="fa-solid fa-moon"></i>
            </div>
          </li>
        </ul>
      </div>
      <div className="quran_font">
        <h3> خط القران </h3>
        <ul>
          <li className={naskhActive} onClick={() => handleNaskh()}>
            نسخ
          </li>
          <li className={nastalikActive} onClick={() => handleNastalik()}>
            نستعليق
          </li>
          <li className={taguidActive} onClick={() => handleTaguid()}>
            التجويد
          </li>
        </ul>
        <div className="font-weight">
          <p> حجم الخط </p>
          <div className="font_weight_control">
            <button
              className={fontSize === 7 ? "increment block" : "increment"}
              onClick={() => handleFontSizeIncrement()}
            >
              +
            </button>
            <p> {fontSize} </p>
            <button
              className={fontSize === 1 ? "decrement block" : "decrement"}
              onClick={() => handleFontSizeDecrement()}
            >
              -
            </button>
          </div>
        </div>
      </div>
      <div className="return_setting">
        <button onClick={()=> handleReturnSetting()} > استعادة الاعدادات المحددة سابقا </button>
      </div>
    </div>
  );
};

export default Setting;
