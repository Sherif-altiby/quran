import  { useMainContext } from "../../Context/MainContext"
import {data} from '../Data/TasabiehData'
import Azkar from "./Azkar"

const Tasabieh = () => {
     
  const { theme } = useMainContext()
    
  return (
    <div className={`praying_azkar ${theme} `} >
       <Azkar data={data} nameOfAzkar={' تسابيح  '} />
    </div>
  )
}

export default Tasabieh