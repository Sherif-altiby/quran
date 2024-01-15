import "./ReaderInfo.scss";
import { useMainContext } from "../../Context/MainContext";
import { allSurahsArabicWithId } from "../../components/SearchSide/SearchSide";
import { useEffect, useState } from "react";

const ReaderInfo = () => {
  const {
    theme,
    readerInfo,
    readerImg,
    readerName,
    setAudioClass,
    setAudioScource,
  } = useMainContext();
  const [data, setData] = useState([]);
  const [searchData, setSearchData] = useState("");
  const [copyClass, setCopyClass] = useState("not-blok")

  useEffect(() => {
    if (searchData !== null && searchData.length > 0) {
      const finalData = allSurahsArabicWithId.filter((item) =>
        item.name.includes(searchData)
      );
      setData(finalData);
    }
  }, [searchData]);

  const allSurahData = data.length > 0 ? data : allSurahsArabicWithId;
  const downloadedSource = localStorage.getItem("audio-scr")

  const handleClick = (id) => {
    setAudioClass("block");
    const numberOfSurah =
      id < 10 ? `00${id}` : id >= 10 && id < 100 ? `0${id}` : id;
    if (readerName === "عبدالباسط عبدالصمد") {
      setAudioScource(
        `https://server7.mp3quran.net/basit/${numberOfSurah}.mp3`
      );
    } else if (readerName === "عبدالرحن السديس") {
      setAudioScource(`https://server11.mp3quran.net/sds/${numberOfSurah}.mp3`);
    } else if (readerName === "فارس عباد") {
      setAudioScource(
        `https://server8.mp3quran.net/frs_a/${numberOfSurah}.mp3`
      );
    } else if (readerName === "هاني الرفاعي") {
      setAudioScource(`https://server8.mp3quran.net/hani/${numberOfSurah}.mp3`);
    } else if (readerName === "مشاري راشد العفاسي") {
      setAudioScource(`https://server8.mp3quran.net/afs/${numberOfSurah}.mp3`);
    } else if (readerName === "خليل محمود الحصري") {
      setAudioScource(
        `https://server13.mp3quran.net/husr/${numberOfSurah}.mp3`
      );
    } else if (readerName === "محمد صديق المنشاوي") {
      setAudioScource(
        `https://server10.mp3quran.net/minsh/${numberOfSurah}.mp3`
      );
    } else if (readerName === "عبد الله كامل") {
      setAudioScource(
        `https://server16.mp3quran.net/kamel/Rewayat-Hafs-A-n-Assem/${numberOfSurah}.mp3`
      );
    } else if (readerName === "محمد ايوب") {
      setAudioScource(
        `https://server16.mp3quran.net/ayyoub2/Rewayat-Hafs-A-n-Assem/${numberOfSurah}.mp3`
      );
    } else if (readerName === "محمود علي البنا") {
      setAudioScource(`https://server8.mp3quran.net/bna/${numberOfSurah}.mp3`);
    } else if (readerName === "خالد القحطاني") {
      setAudioScource(`https://server10.mp3quran.net/qht/${numberOfSurah}.mp3`);
    } else if (readerName === "عبدالعزيز التركي") {
      setAudioScource(
        `https://server16.mp3quran.net/a_turki/Rewayat-Hafs-A-n-Assem/${numberOfSurah}.mp3`
      );
    } else if (readerName === "خليفة الطنيجي") {
      setAudioScource(
        `https://server12.mp3quran.net/tnjy/${numberOfSurah}.mp3`
      );
    } else if (readerName === "أبو بكر الشاطري") {
      setAudioScource(
        `https://server11.mp3quran.net/shatri/${numberOfSurah}.mp3`
      );
    } else if (readerName === "عبدالمحسن الحارثي") {
      setAudioScource(
        `https://server6.mp3quran.net/mohsin_harthi/${numberOfSurah}.mp3`
      );
    } else if (readerName === "أحمد العجمي") {
      setAudioScource(`https://server10.mp3quran.net/ajm/${numberOfSurah}.mp3`);
    } else if (readerName === "سعود الشريم") {
      setAudioScource(`https://server7.mp3quran.net/shur/${numberOfSurah}.mp3`);
    }
  };

  const handleDownload = async (downloadedSource, id) => {
    const numberOfSurah =
      id < 10 ? `00${id}` : id >= 10 && id < 100 ? `0${id}` : id;
    try {
      const scr = downloadedSource.slice(-3) !== "mp3" ? `${downloadedSource}${numberOfSurah}.mp3` : downloadedSource
      console.log(scr)
      const response = await fetch(scr);
      const blob = await response.blob();
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);

      const filename = scr.substring(
        scr.lastIndexOf("/") + 1
      );
      console.log(filename);
      link.download = filename;

      link.click();
    } catch (error) {
      console.error("Error downloading audio:", error);
    }
  };

  const handleCopyClick = async (downloadedSource, id) => {
    const numberOfSurah =
    id < 10 ? `00${id}` : id >= 10 && id < 100 ? `0${id}` : id;
    try {
      const scr = downloadedSource.slice(-3) !== "mp3" ? `${downloadedSource}${numberOfSurah}.mp3` : downloadedSource
      await navigator.clipboard.writeText(scr);
      setCopyClass("block")
      setTimeout(()=> setCopyClass("not-block"), 1000)
    } catch (err) {
      console.error("Unable to copy text: ", err);
    }
  };

  return (
    <div className={`raeder_info ${theme}`}>
      <div className="reader_info_text container">
        <div className="text">
          <h2> {readerName} </h2>
          <p> {readerInfo} </p>
        </div>
        <div className="img">
          <img src={readerImg} alt="" />
        </div>
      </div>
      <div className="container">
        <div className="reader_info_content">
          <div className="search">
            <input
              type="text"
              placeholder="ابحث عن صورة"
              value={searchData}
              onChange={(e) => setSearchData(e.target.value)}
            />
            <div className="icon">
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
          <div className="all_surah">
            {allSurahData.map((item) => (
              <div className="surah" key={item.id}>
                <div className="icons">
                  <div
                    className="icon"
                    onClick={() => handleDownload(downloadedSource, item.id)}
                  >
                    <i className="fa-solid fa-download"></i>
                  </div>
                  <div
                    className="icon"
                    onClick={() => handleCopyClick(downloadedSource, item.id)}
                  >
                    <i className="fa-solid fa-link"></i>
                  </div>
                </div>
                <div
                  className="surah_text"
                  onClick={() => handleClick(item.id)}
                >
                  <div>
                    <p> {item.name} </p> - <p> {item.id} </p>
                  </div>
                  <div className="icon">
                    <i className="fa-solid fa-play"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={`copy ${copyClass}`} >
           تم نسخ الرابط الى الحافظة
        </div>
      </div>
    </div>
  );
};

export default ReaderInfo;
