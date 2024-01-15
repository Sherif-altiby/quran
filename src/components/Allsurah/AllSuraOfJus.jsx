import axios from "axios";
import React, { useEffect, useState } from "react";
import { useMainContext } from "../../Context/MainContext";
import { useNavigate } from "react-router-dom";

const AllSuraOfJus = () => {
  const [surahs, setSurahs] = useState(null);
  const { theme, setSurahNumber,jusNumber } = useMainContext();
  const navigate = useNavigate()

  useEffect(() => {
    const fetchAllSurasOfJus = async () => {
      try {
        const response = await axios.get(
          `http://api.alquran.cloud/v1/juz/${jusNumber}/quran-uthmani`
        );
        setSurahs(response.data.data.surahs);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllSurasOfJus();
  }, []);

  const handleClick = (number)=>{
    setSurahNumber(number);
    navigate('/read-surah')
  }


  return (

    <div className={"all_surah " + theme}>
      <div className="container">
        <div className="all_surah_content">
          {surahs ? (
            Object.entries(surahs).map((item) => (
              <div className="surah" key={item.id} onClick={()=> handleClick(item[1].number)} >
                <div className="ayah_numbers">
                  <div> ايات </div> <div> {item[1].numberOfAyahs} </div>
                </div>
                <div className="text">
                  <div className="ayah_name"> {item[1].name.slice(6)} </div>
                  <div className="ayah_count">
                    <span> {item[1].number} </span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div> Loading ....... </div>
          )}
        </div>
      </div>
    </div>
  
  );
};

export default AllSuraOfJus;

