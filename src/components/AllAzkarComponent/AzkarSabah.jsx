import  { useMainContext } from "../../Context/MainContext"
import {data} from '../Data/AzkarSabahData'
import Azkar from "./Azkar"

const PrayingAzkar = () => {
     
  const { theme } = useMainContext()
    
  return (
    <div className={`praying_azkar ${theme} `} >
       <Azkar data={data} nameOfAzkar={' اذكار الصباح '} />
    </div>
  )
}

export default PrayingAzkar