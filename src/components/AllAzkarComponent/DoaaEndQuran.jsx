import  { useMainContext } from "../../Context/MainContext"
import {data} from '../Data/EndQuranDoaaData'
import Azkar from "./Azkar"

const DoaaEndQuran = () => {
     
  const { theme } = useMainContext()
    
  return (
    <div className={`praying_azkar ${theme} `} >
       <Azkar data={data} nameOfAzkar={' دعاء ختم القران  '} />
    </div>
  )
}

export default DoaaEndQuran