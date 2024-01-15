
import  { useMainContext } from "../../Context/MainContext"
import {data} from '../Data/AzkarWalkupData'
import Azkar from "./Azkar"

const AzkarWalkup = () => {
     
  const { theme } = useMainContext()
    
  return (
    <div className={`praying_azkar ${theme} `} >
       <Azkar data={data} nameOfAzkar={' اذكار الاستيقاظ '} />
    </div>
  )
}

export default AzkarWalkup