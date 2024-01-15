import  { useMainContext } from "../../Context/MainContext"
import {data} from '../Data/AdeiaNabawiaData'
import Azkar from "./Azkar"

const AdeiaNabouia = () => {
     
  const { theme } = useMainContext()
    
  return (
    <div className={`praying_azkar ${theme} `} >
       <Azkar data={data} nameOfAzkar={' الادعية النبوية  '} />
    </div>
  )
}

export default AdeiaNabouia