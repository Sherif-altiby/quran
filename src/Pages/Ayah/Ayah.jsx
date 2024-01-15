import axios from "axios";
import './Ayah.scss'
import { useEffect } from "react";
import { useState } from "react";
import { useMainContext  } from "../../Context/MainContext";


const Ayah = () => {
  const { theme, fontSize } = useMainContext()
  const [ayahText, setAyahText] = useState("");
  const surahFontSize =
  fontSize === 1
    ? 23
    : fontSize === 2
    ? 25
    : fontSize === 3
    ? 27
    : fontSize === 4
    ? 29
    : fontSize === 5
    ? 31
    : fontSize === 6
    ? 33
    : 35;
  useEffect(() => {
    const fetchAyahText = async () => {
      try {
        const response = await axios.get(
          "http://api.alquran.cloud/v1/ayah/262"
        );
        setAyahText(response.data.data.text);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAyahText()
  }, [ayahText]);
  return <div className={`ayah ` + theme}  style={{fontSize: `${surahFontSize}px`}} > 
  <div className="container">
  {
    ayahText && ( <p> { ayahText} </p> )
  }
  </div>
  </div>;
};

export default Ayah;
