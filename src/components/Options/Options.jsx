import "./Options.scss";
import { useMainContext } from "../../Context/MainContext";
import { data } from "../Data/QuranReaders";
import { useState } from "react";

const Options = ({ allOptionClass, audioScource, audioRef }) => {
  const { theme } = useMainContext();
  const [speedClass, setSpeedClass] = useState(false);
  const [readersClass, setReadersClass] = useState(false);

  const downloadAudio = async (audioScource) => {
    try {
      const response = await fetch(audioScource);
      const blob = await response.blob();

      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);

      const filename = audioScource.substring(audioScource.lastIndexOf('/') + 1);
      console.log(filename)
      link.download = filename;

      link.click();
    } catch (error) {
      console.error('Error downloading audio:', error);
    }
  };

  const handleSpeedChange = (speed) => {
    if (audioRef.current) {
      audioRef.current.playbackRate = speed;
    }
  };

  return (
    <div className={`options ${theme}`}>
      <div className={allOptionClass ? "all_options block" : "all_options"}>
        <div className="download" onClick={()=>downloadAudio(audioScource)} >
          <p> تحميل </p>
          <div className="icon">
            <i className="fa-solid fa-download"></i>
          </div>
        </div>
        <div className="control_speed" onClick={() => setSpeedClass(true)}>
          <div className="icon">
            <i className="fa-solid fa-chevron-left"></i>
          </div>
          <div className="text">
            <p>السرعة</p>
            <div className="icon"> 1x </div>
          </div>
        </div>
        <div className="control_reader" onClick={() => setReadersClass(true)}>
          <div className="icon">
            <i className="fa-solid fa-chevron-left"></i>
          </div>
          <div className="text">
            <p>القراء</p>
            <div className="icon">
              <i className="fa-regular fa-user"></i>
            </div>
          </div>
        </div>
      </div>
      <div className={speedClass ? "spaed_options block" : "spaed_options"}>
        <div className="option_header" onClick={() => setSpeedClass(false)}>
          <p>سرعة التشغيل</p>
          <div className="icon">
            <i className="fa-solid fa-chevron-right"></i>
          </div>
        </div>
        <ul>
          <li onClick={()=> handleSpeedChange(0.25)} > .25x </li>
          <li onClick={()=> handleSpeedChange(0.25)} > .5x </li>
          <li onClick={()=> handleSpeedChange(0.27)} > .75x </li>
          <li onClick={()=> handleSpeedChange(1)} > طبيعي </li>
          <li onClick={()=> handleSpeedChange(1.25)} > 1.25x </li>
          <li onClick={()=> handleSpeedChange(1.5)} > 1.5x </li>
          <li onClick={()=> handleSpeedChange(1.75)} > 1.75x </li>
          <li onClick={()=> handleSpeedChange(2)} > 2x </li>
        </ul>
      </div>
      <div className={readersClass ? "reader_control block" : "reader_control"}>
        <div className="option_header" onClick={() => setReadersClass(false)}>
          <p>حدد القارئ</p>
          <div className="icon">
            <i className="fa-solid fa-chevron-right"></i>
          </div>
        </div>
        <ul>
          {data.map((item) => (
            <li key={item.id}> {item.title} </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Options;
