import "./Loading.scss";
import { useMainContext } from "../../Context/MainContext";

const Loading = () => {
  const { theme } = useMainContext();
  return (
    <div className={`loadig ${theme}`}>
      <div className="line">
      <span></span>
      </div>
    </div>
  );
};

export default Loading;
