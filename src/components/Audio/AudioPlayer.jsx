import "./AudioPlayer.scss";
import { useEffect, useRef, useState } from "react";
import { useMainContext } from "../../Context/MainContext";
import Options from "../Options/Options";

const AudioPlayer = ({ audioScource, blockClass }) => {
  const { theme, setAudioClass, } = useMainContext();
  const audioRef = useRef();
  const [play, setPlay] = useState(true);
  const [allOptionClass, setAllOptionclass] = useState(false);
  const [progressWidth, setProgressWidth] = useState(0);
  const [dotePosition, setDotePosition] = useState(0);
  const [loading, setLoading] = useState(true);


  const controlAudio = () => {
    setInterval(() => {
      setProgressWidth(
        (audioRef.current.currentTime / audioRef.current.duration) * 100
      );
      setDotePosition(
        (audioRef.current.currentTime / audioRef.current.duration) * 100
      );
    }, 1000);
  };


  useEffect(() => {
    if (audioRef.current.duration) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  });

  const tooglePlayAudioIcon = () => {
    if (play) {
      setPlay(false);
      audioRef.current.pause();
    } else {
      setPlay(true);
      audioRef.current.play();
    }
  };

  const removeAudio = () => {
    audioRef.current.pause();
    setAudioClass("not-block");
  };

  return (
    <div>
      <div className={`play ${theme} ${blockClass}`}>
        <div className="audioPlay">
          <div className="progress">
            <span className="dote" style={{ right: `${dotePosition}%` }}></span>
            <span
              className="realprogress"
              style={{ width: `${progressWidth}%` }}
            ></span>
          </div>
          <div className="audioControll">
            <div className="duration">

            </div>
            <div className="controll">
              <div className="close" onClick={() => removeAudio()}>
                <i className="fa-solid fa-xmark"></i>
              </div>
              <div className="next">
                <i className="fa-solid fa-backward"></i>
              </div>
              <div className="stop" onClick={() => tooglePlayAudioIcon()}>
                {loading === false ? (
                  play ? (
                    <i className="fa-solid fa-pause"></i>
                  ) : (
                    <i className="fa-solid fa-play"></i>
                  )
                ) : (
                  <i className="fa-solid fa-circle-notch loading"></i>
                )}
              </div>
              <div className="last">
                <i className="fa-solid fa-forward"></i>
              </div>
              <div
                className="more"
                onClick={() => setAllOptionclass(!allOptionClass)}
              >
                <Options
                  allOptionClass={allOptionClass}
                  audioScource={audioScource}
                  audioRef={audioRef}
                />
                <span></span>
                <span></span> <span></span>
              </div>
            </div>
            <div className="currnt_time">
              
            </div>
          </div>
        </div>
        <audio
          src={`${audioScource}`}
          autoPlay
          ref={audioRef}
          onPlay={() => controlAudio()}
        ></audio>
      </div>
    </div>
  );
};

export default AudioPlayer;
