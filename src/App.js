import "./App.scss";
import { useMainContext } from "./Context/MainContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Allsurah from "./components/Allsurah/Allsurah";
import Jus from "./components/Allsurah/Jus";
import Wahi from "./components/Allsurah/Wahi";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CreateAcount from "./Pages/CreateAcount/CreateAcount";
import Setting from "./components/Setting/Setting";
import SearchSide from "./components/SearchSide/SearchSide";
import SettingRight from "./components/SettingRight/SettingRight";
import WhatToRead from "./components/WhatToRead/WhatToRead";
import Surah from "./Pages/Surah/Surah";
import AllSuraOfJus from "./components/Allsurah/AllSuraOfJus";
import Ayah from "./Pages/Ayah/Ayah";
import Radio from "./Pages/Radio/Radio";
import ReaderInfo from "./Pages/ReaderInfo/ReaderInfo";
import AudioPlayer from "./components/Audio/AudioPlayer";
import AllReader from "./Pages/AllReader/AllReader";
import Boukhary from "./Pages/Boukhary/Boukhary";
import Hadith from "./Pages/Boukhary/Hadith";
import Muslim from "./Pages/Muslim/Muslim";
import PrayingTimes from "./Pages/PrayingTimes/PrayingTimes";
import PrayingAzkar from "./components/AllAzkarComponent/PrayingAzkar";
import AzkarSabah from "./components/AllAzkarComponent/AzkarSabah";
import AzkarMasaa from "./components/AllAzkarComponent/AzkarMasaa";
import Azkar from "./Pages/Azkar/Azkar";
import AzkarSleep from "./components/AllAzkarComponent/AzkarSleep"
import AdeiaNabouia from "./components/AllAzkarComponent/AdeiaNabouia"
import AzkarAzan from "./components/AllAzkarComponent/AzkarAzan"
import AzkarFood from "./components/AllAzkarComponent/AzkarFood"
import AzkarHaj from "./components/AllAzkarComponent/AzkarHaj"
import AzkarKhalaa from "./components/AllAzkarComponent/AzkarKhalaa"
import AzkarManzel from "./components/AllAzkarComponent/AzkarManzel"
import AzkarMasged from "./components/AllAzkarComponent/AzkarMasged"
import AzkarMotafareka from "./components/AllAzkarComponent/AzkarMotafareka"
import AzkarOnSallah from "./components/AllAzkarComponent/AzkarOnSallah"
import AzkarWalkup from "./components/AllAzkarComponent/AzkarWalkup"
import AzkarWodoua from "./components/AllAzkarComponent/AzkarWodoua"
import DoaaEndQuran from "./components/AllAzkarComponent/DoaaEndQuran"
import GoameAldoaa from "./components/AllAzkarComponent/GoameAldoaa"
import NamesOfAllah from "./components/AllAzkarComponent/NamesOfAllah"
import Roukia from "./components/AllAzkarComponent/Roukia"
import Tasabieh from "./components/AllAzkarComponent/Tasabieh"
import AboutQuran from "./Pages/AboutQuran/AboutQuran";



function App() {
  const { writeClase ,audioClass, audioScource, } = useMainContext();
  return (
    <div className={writeClase === true ? "app hidden" : "app"}>
      <Router>
        <Header />
        <Setting />
        <SearchSide />
        <SettingRight />
        <WhatToRead />
        <Routes>
          <Route path="/"  element={<Home />}>
            <Route index element={<Allsurah />} />
            <Route path="surah" element={<Allsurah />} />
            <Route path="jus" element={<Jus />} />
            <Route path="wahie" element={<Wahi />} />
            <Route path="surahs-of-jus" element={<AllSuraOfJus />} />
          </Route>
          <Route path="/quran"  element={<Home />}>
            <Route index element={<Allsurah />} />
            <Route path="surah" element={<Allsurah />} />
            <Route path="jus" element={<Jus />} />
            <Route path="wahie" element={<Wahi />} />
            <Route path="surahs-of-jus" element={<AllSuraOfJus />} />
          </Route>
          <Route path="/create-acount" element={<CreateAcount />} />
          <Route path="/about-quran" element={<AboutQuran />} />
          <Route path="/read-surah" element={<Surah />} />
          <Route path="/read-ayah" element={<Ayah />} />
          <Route path="/radio" element={<Radio />} />
          <Route path="/reader" element={<ReaderInfo />} />
          <Route path="/test" element={<AudioPlayer />} />
          <Route path="/AllReader" element={<AllReader />} />
          <Route path="/boukhary" element={<Boukhary />} />
          <Route path="/hadith" element={<Hadith />} />
          <Route path="/muslim" element={<Muslim />} />
          <Route path="/praying" element={<PrayingTimes />} />
          <Route path="/azkar" element={<Azkar />} >
            <Route index  element ={<AzkarSabah />} />
            <Route path="azkar-sabah"  element ={<AzkarSabah />} />
            <Route path="azkar-massa"  element ={<AzkarMasaa />} />
            <Route path="azkar-sallah"  element ={<PrayingAzkar />} />
            <Route path="azkar-sleep"  element ={<AzkarSleep />} />
            <Route path="azkar-wakeup"  element ={<AzkarWalkup />} />
            <Route path="azkar-on-sallah"  element ={<AzkarOnSallah />} />
            <Route path="azkar-random"  element ={<AzkarMotafareka />} />
            <Route path="azkar-azan"  element ={<AzkarAzan />} />
            <Route path="azkar-mosque"  element ={<AzkarMasged />} />
            <Route path="azkar-wodoua"  element ={<AzkarWodoua />} />
            <Route path="azkar-manzel"  element ={<AzkarManzel />} />
            <Route path="azkar-khallaa"  element ={<AzkarKhalaa />} />
            <Route path="azkar-food"  element ={<AzkarFood />} />
            <Route path="azkar-haj"  element ={<AzkarHaj />} />
            <Route path="tsabieh"  element ={<Tasabieh />} />
            <Route path="goamea-doaa"  element ={<GoameAldoaa />} />
            <Route path="doaa-nabaouy"  element ={<AdeiaNabouia />} />
            <Route path="doaa-endquran"  element ={<DoaaEndQuran />} />
            <Route path="names-allah"  element ={<NamesOfAllah />} />
            <Route path="elroukia"  element ={<Roukia />} />
          </Route>
        </Routes>
        <Footer /> 
        <AudioPlayer audioScource={audioScource} blockClass={audioClass} />
      </Router>
    </div>
  );
}

export default App;
