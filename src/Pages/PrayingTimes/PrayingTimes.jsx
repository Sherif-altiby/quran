import './Prayingtimes.scss'
import { useMainContext } from "../../Context/MainContext"
import { useEffect, useState } from 'react'
import axios from 'axios'
import Loading from "../../components/Loading/Loading"

const PrayingTimes = () => {
  const { theme } = useMainContext() 
  const [dateData, setDateData]= useState()
  const currentDate = new Date();
  const dayOfMonth = currentDate.getDate();
   

  useEffect(()=>{
    const fetchData = async ()=>{
      
      
      try {
        const response = await axios.get("http://api.aladhan.com/v1/calendarByCity/2023/12?city=Mansoura&country=Egypt&method=1");
        setDateData(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    
    fetchData();
  }, [])
  
  const myPrayingTimes = dateData ? (dateData[dayOfMonth].timings) : null
  const asrTime = dateData ? myPrayingTimes.Asr.split(" ")[0].split(":")[0] - 12 + ":" + myPrayingTimes.Asr.split(" ")[0].split(":")[1] : null;
  const majripTime = dateData ? myPrayingTimes.Maghrib.split(" ")[0].split(":")[0] - 12 + ":" + myPrayingTimes.Asr.split(" ")[0].split(":")[1] : null;
  const ishaime = dateData ? myPrayingTimes.Isha.split(" ")[0].split(":")[0] - 12 + ":" + myPrayingTimes.Asr.split(" ")[0].split(":")[1] : null;
 
 

  return (
    <div className={`praying ${theme}`} >
      
     {
      myPrayingTimes ? ( <div className="all_times"> 

        <div className="time">
          <h3> الفجر </h3>
          <p> { myPrayingTimes.Fajr.split("(EET)") } </p>
        </div>

        <div className="time">
          <h3> الشروق </h3>
          <p> { myPrayingTimes.Sunrise.split("(EET)") } </p>
        </div>

        <div className="time">
          <h3> الضهر </h3>
          <p> { myPrayingTimes.Dhuhr.split("(EET)") } </p>
        </div>

        <div className="time">
          <h3> العصر </h3>
          <p> { asrTime } </p>
        </div>

        <div className="time">
          <h3> المغرب </h3>
          <p> {majripTime } </p>
        </div>

        <div className="time">
          <h3> العشاء </h3>
          <p> {ishaime} </p>
        </div>

       </div> ) : (<Loading />)
     }

    </div>
  )
}

export default PrayingTimes