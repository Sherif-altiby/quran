import "./Radio.scss";
import { useMainContext } from "../../Context/MainContext";
import m1 from "../../img/1.avif";
import m2 from "../../img/2.webp";
import m3 from "../../img/3.avif";
import m4 from "../../img/4.avif";
import Readers from "../../components/Readers/Readers";

const Radio = () => {
  const { theme } = useMainContext();
  return (
    <div className={`radio ${theme}`}>
      <div className="bg"></div>
      <div className="container">
        <div className="radio_content">
          <div className="auto_audio">
            <div className="all_boxs">
              <div className="box">
                <div className="img">
                  <img src={m1} alt="" />
                  <div className="play">
                    <div className="icon">
                      <i className="fa-solid fa-play"></i>
                    </div>
                  </div>
                </div>
                <div className="box_text">
                  <div className="icon">
                    <i className="fa-solid fa-play"></i>
                  </div>
                  <div className="text">
                    <h3> التلاوات الشائعة </h3> <p> تلاوات يومية منتقاة </p>
                  </div>
                </div>
              </div>
              <div className="box">
                <div className="img">
                  <img src={m2} alt="" />
                  <div className="play">
                    <div className="icon">
                      <i className="fa-solid fa-play"></i>
                    </div>
                  </div>
                </div>
                <div className="box_text">
                  <div className="icon">
                    <i className="fa-solid fa-play"></i>
                  </div>
                  <div className="text">
                    <h3> سورة يس </h3> <p> السور لقراء مختارين </p>
                  </div>
                </div>
              </div>
              <div className="box">
                <div className="img">
                  <img src={m3} alt="" />
                  <div className="play">
                    <div className="icon">
                      <i className="fa-solid fa-play"></i>
                    </div>
                  </div>
                </div>
                <div className="box_text">
                  <div className="icon">
                    <i className="fa-solid fa-play"></i>
                  </div>
                  <div className="text">
                    <h3> سورة الكهف </h3> <p> استمع لسورة الكهف على التكرار </p>
                  </div>
                </div>
              </div>
              <div className="box">
                <div className="img">
                  <img src={m4} alt="" />
                  <div className="play">
                    <div className="icon">
                      <i className="fa-solid fa-play"></i>
                    </div>
                  </div>
                </div>
                <div className="box_text">
                  <div className="icon">
                    <i className="fa-solid fa-play"></i>
                  </div>
                  <div className="text">
                    <h3> جزء عم</h3> <p> استمع إلى الجزء الأخير من القرآن</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Readers />
        </div>
      </div>
    </div>
  );
};

export default Radio;
