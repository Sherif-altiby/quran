import { createContext, useContext, useEffect, useState } from "react";

export const MainContext = createContext();

const MainContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const [showAllSurah, setShowAllSurah] = useState("surah");
  const [settingBlock, setSetingBlock] = useState(false);
  const [searchBlock, setSearchBlock] = useState(false);
  const [asideBlock, setAsideBlock] = useState(false);
  const [writeClase, setWriteClass] = useState(false);
  const [audioClass, setAudioClass] = useState("not-block")
  const [surahNumber, setSurahNumber] = useState(
    localStorage.getItem("surah-number")
    ? JSON.parse(localStorage.getItem("surah-number"))
    : 1
    );
    const [jusNumber, setJushNumber] = useState(1);
    const [fontType, setFontType] = useState("");
    const [audioScource, setAudioScource] = useState(
      localStorage.getItem("audio-scr")
       ? localStorage.getItem("audio-scr")
       : ""
    )
    const [fontSize, setFontSize] = useState(
    localStorage.getItem("fontSize")
      ? JSON.parse(localStorage.getItem("fontSize"))
      : 1
  );

  const [readerName, setReaderName] = useState(
    localStorage.getItem("reader-name")
      ? localStorage.getItem("reader-name")
      : ""
  );
  const [readerImg, setReaderImg] = useState(
    localStorage.getItem("reader-img") ? localStorage.getItem("reader-img") : ""
  );
  const [readerInfo, setReaderInfo] = useState(
    localStorage.getItem("reader-info")
      ? localStorage.getItem("reader-info")
      : ""
  );
 
  useEffect(() => {
    localStorage.setItem("fontSize", fontSize);
  }, [fontSize]);

  useEffect(() => {
    localStorage.setItem("surah-number", surahNumber);
  }, [surahNumber]);

  useEffect(() => {
    localStorage.setItem("reader-name", readerName);
  }, [readerName]);

  useEffect(() => {
    localStorage.setItem("reader-info", readerInfo);
  }, [readerInfo]);
  
  useEffect(() => {
    localStorage.setItem("reader-img", readerImg);
  }, [readerImg]);

  useEffect(() => {
    localStorage.setItem("audio-scr", audioScource);
  }, [audioScource]);

  

  return (
    <MainContext.Provider
      value={{
        theme,
        showAllSurah,
        settingBlock,
        fontType,
        fontSize,
        searchBlock,
        asideBlock,
        writeClase,
        surahNumber,
        jusNumber,
        readerName,
        readerImg,
        readerInfo,
        setTheme,
        audioClass,
        audioScource,
        setShowAllSurah,
        setSetingBlock,
        setFontType,
        setFontSize,
        setSearchBlock,
        setAsideBlock,
        setWriteClass,
        setSurahNumber,
        setJushNumber,
        setReaderName,
        setReaderImg,
        setReaderInfo,
        setAudioClass,
        setAudioScource,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainContextProvider;

export const useMainContext = () => {
  return useContext(MainContext);
};
