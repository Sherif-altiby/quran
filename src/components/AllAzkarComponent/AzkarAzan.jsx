import  { useMainContext } from "../../Context/MainContext"
import {data} from '../Data/AzkarAzanData'
import Azkar from "./Azkar"

const AzkarAzan = () => {
     
  const { theme } = useMainContext()
    
  return (
    <div className={`praying_azkar ${theme} `} >
       <Azkar data={data} nameOfAzkar={' أذكار الاذان  '} />
    </div>
  )
}

export default AzkarAzan