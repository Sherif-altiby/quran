import "./Surah.scss";
import { useMainContext } from "../../Context/MainContext";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../../components/Loading/Loading";

const Surah = () => {
  const { theme, surahNumber, setSurahNumber, fontSize } = useMainContext();
  const [surahText, setSuraText] = useState(null);
  const [surahInfo, setSuraInfo] = useState(null);

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

  const handleClick = () => {
    setSurahNumber((x) => x + 1);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const fetchSurahData = async () => {
      try {
        const response = await axios.get(
          `http://api.alquran.cloud/v1/surah/${surahNumber}`
        );
        setSuraText(response.data.data.ayahs);
        setSuraInfo(response.data.data);
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      } catch (error) {
        console.error("Error in fetchin data", error);
      }
    };
    fetchSurahData();
  }, [surahNumber]);
  return (
    <div className={`surah_raed ${theme}`}>
      <div className="container">
        <div className="surah_info">
          {surahInfo && (
            <>
              <h2> {surahInfo.name} </h2>
              <h3> بِسۡمِ ٱللَّهِ ٱلرَّحۡمَـٰنِ ٱلرَّحِیمِ</h3>
            </>
          )}
        </div>
        <div className="all_ayahs">
          {surahText ? (
            surahText.map((ayah) => (
              <div className="surah_text" key={ayah.number}>
                <span style={{ fontSize: `${surahFontSize}px` }}>
                  {ayah.text.split("بِسۡمِ ٱللَّهِ ٱلرَّحۡمَـٰنِ ٱلرَّحِیمِ")}
                </span>
                <span className="number">{ayah.numberInSurah}</span>
              </div>
            ))
          ) : (
            <Loading />
          )}
        </div>
        <div className="btn" onClick={() => handleClick()}>
          السورة التالية
        </div>
      </div>
    </div>
  );
};

export default Surah;
