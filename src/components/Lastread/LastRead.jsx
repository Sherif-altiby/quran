import "./LastRead.scss";
import { useMainContext } from "../../Context/MainContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { useNavigate } from "react-router-dom";
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useEffect, useState } from "react";



const LastRead = () => {

  const { theme , setSurahNumber} = useMainContext();
  const [slidesPerView, setSlidesPerView] = useState(1);
  const navigate = useNavigate()
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setSlidesPerView(3);
      } else if (window.innerWidth <= 768 && window.innerWidth > 500) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(1);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNavigate = (id)=> {
    setSurahNumber(id)
    navigate("/read-surah")
  }

  return (
    <div className={"last_read " + theme}>
      <div className="container">
        <h2> قرئ مؤخرا </h2>
        <div className="last_read_content">
          <Swiper className="swiper_last_read"
             modules={[Navigation, Pagination, Scrollbar, A11y]}
             spaceBetween={50}
             slidesPerView={slidesPerView}
             navigation
             pagination={{ clickable: true }}
             scrollbar={{ draggable: true }}
          >
            <SwiperSlide>
              <div className="box" onClick = {()=> handleNavigate(36)} >
                <div className="text">
                  <div className="surah_number"> 36 </div>
                  <div className="surah_name"> سورة يس </div>
                </div>
                <div className="surah">
                  <div className="surah_name"> يس </div>
                  <div className="surah_count"> ايات 83 </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="box" onClick = {()=> handleNavigate(27)} >
                <div className="text">
                  <div className="surah_number"> 27 </div>
                  <div className="surah_name"> سورة النمل </div>
                </div>
                <div className="surah">
                  <div className="surah_name"> النمل </div>
                  <div className="surah_count"> ايات 93 </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="box" onClick = {()=> handleNavigate(62)} >
                <div className="text">
                  <div className="surah_number"> 62 </div>
                  <div className="surah_name"> سورة الجمعة </div>
                </div>
                <div className="surah">
                  <div className="surah_name"> الجمعة </div>
                  <div className="surah_count"> ايات 11 </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="box" onClick = {()=> handleNavigate(24)} >
                <div className="text">
                  <div className="surah_number"> 24 </div>
                  <div className="surah_name"> سورة النور </div>
                </div>
                <div className="surah">
                  <div className="surah_name"> النور </div>
                  <div className="surah_count"> ايات 64 </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

      
        </div>
      </div>
    </div>
  );
};

export default LastRead;
