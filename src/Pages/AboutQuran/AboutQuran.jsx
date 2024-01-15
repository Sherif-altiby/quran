import "./AboutQuran.scss";
import { useMainContext } from "../../Context/MainContext";
import { data } from "../../components/Data/AboutQuranData";
import Azkar from "../../components/AllAzkarComponent/Azkar";
import { useNavigate } from "react-router-dom";

const AboutQuran = () => {
  const { theme , setWriteClass , setSurahNumber} = useMainContext();
  const navigate = useNavigate()

  const handleClick = (number)=>{
    setWriteClass(false);
    setSurahNumber(number)
    navigate("/read-surah")
    window.scrollTo(0, 0)
  }
  return (
    <div className={`about_quran ${theme}`}>
      <div className="about_quran_content">
        <Azkar data={data} nameOfAzkar={"القران الكريم"} />
        <div className="btn" onClick={()=>handleClick(1)}> ابدا قراءة القران </div>
      </div>
    </div>
  );
};

export default AboutQuran;
