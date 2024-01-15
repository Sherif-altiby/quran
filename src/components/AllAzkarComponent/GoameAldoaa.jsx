import  { useMainContext } from "../../Context/MainContext"
import {data} from '../Data/GawameDoaaData'
import Azkar from "./Azkar"

const GoameAldoaa = () => {
     
  const { theme } = useMainContext()
    
  return (
    <div className={`praying_azkar ${theme} `} >
       <Azkar data={data} nameOfAzkar={' جوامع الدعاء  '} />
    </div>
  )
}

export default GoameAldoaa