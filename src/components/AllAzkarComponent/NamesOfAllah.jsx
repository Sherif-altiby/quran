import  { useMainContext } from "../../Context/MainContext"
import {data} from '../Data/NamesOgAllahData'
import Azkar from "./Azkar"

const NamesOfAllah = () => {
     
  const { theme } = useMainContext()
    
  return (
    <div className={`praying_azkar ${theme} `} >
       <Azkar data={data} nameOfAzkar={'  اسماء الله الحسنى  '} />
    </div>
  )
}

export default NamesOfAllah