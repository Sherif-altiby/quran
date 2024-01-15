import  { useMainContext } from "../../Context/MainContext"
import {data} from '../Data/RokiaData'
import Azkar from "./Azkar"

const Roukia = () => {
     
  const { theme } = useMainContext()
    
  return (
    <div className={`praying_azkar ${theme} `} >
       <Azkar data={data} nameOfAzkar={' الرقية الشرعية  '} />
    </div>
  )
}

export default Roukia