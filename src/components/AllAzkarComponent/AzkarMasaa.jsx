import  { useMainContext } from "../../Context/MainContext"
import {data} from '../Data/AzkarMassaData'
import Azkar from "./Azkar"

const PrayingAzkar = () => {
     
  const { theme } = useMainContext()
    
  return (
    <div className={`praying_azkar ${theme} `} >
       <Azkar data={data} nameOfAzkar={' اذكار المساء '} />
    </div>
  )
}

export default PrayingAzkar