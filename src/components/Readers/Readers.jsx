import "./Readers.scss";
import { data } from "../Data/QuranReaders";
import { useMainContext } from "../../Context/MainContext";
import { useNavigate } from "react-router-dom";




const Readers = () => {
  const navigate = useNavigate();
  const { theme, setReaderName, setReaderImg, setReaderInfo, setAudioScource } =
    useMainContext();

  const handleReaderClick = (name, img, info, scr) => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    setReaderName(name);
    setReaderImg(img);
    setReaderInfo(info);
    setAudioScource(scr)
    navigate("/reader");

  };
  return (
    <div className={`readers ${theme}`}>
      <div className="container">
        <h3> محطات القراء </h3>
        <div className="readers_container">
          {data.map((item) => (
            <div
              className="reader"
              key={item.id}
              onClick={() => handleReaderClick(item.title, item.img, item.info, item.api)}
            >
              <div className="img">
                <img src={item.img} alt="" />
              </div>
              <div className="name">
                <p> {item.title} </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Readers;
