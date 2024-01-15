import "./AllSurah.scss";
import { useMainContext } from "../../Context/MainContext";
import Surahs from "./Surahs";

const Allsurah = () => {
  const { theme } = useMainContext();

  return (
    <div className={"all_surah " + theme}>
      <div className="container">
      
        <Surahs />
      </div>
    </div>
  );
};

export default Allsurah;
