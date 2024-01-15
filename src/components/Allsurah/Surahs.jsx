import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useMainContext } from '../../Context/MainContext'

const Surahs = () => {
  const { setSurahNumber } =useMainContext()
  const [allSurah, setAllSurah] = useState([])
  const navigate = useNavigate()

  useEffect(()=>{
    const fetchAllSurahs = async ()=>{
      try{
        const response = await axios.get("http://api.alquran.cloud/v1/surah")
        setAllSurah(response.data.data)
      }catch(error){
        console.log(error)
      }
    }
    fetchAllSurahs()
  },[])

  const handleClick = (number)=>{
    navigate('/read-surah');
    setSurahNumber(number)
  }

  return (
    <div className="all_surah_content">
        {
        allSurah ? (
          allSurah.map((item)=>(
            <div className="surah" key={item.id} onClick={()=>handleClick(item.number)}  >
             <div className="ayah_numbers"> <div>  ايات </div> <div> {item.numberOfAyahs} </div> </div>
             <div className="text">
              <div className="ayah_name"> {item.name.slice(6)} </div>
              <div className="ayah_count">
                <span> {item.number} </span>
              </div>
             </div>
            </div>
          ))
        ) :  ( <div> Loading ....... </div> )
      }
      </div>
  )
}

export default Surahs