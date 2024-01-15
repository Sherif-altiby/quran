import  { useMainContext } from "../../Context/MainContext"
import {data} from '../Data/AzkarMasgedData'
import Azkar from "./Azkar"

const AzkarMasged = () => {
     
  const { theme } = useMainContext()
    
  return (
    <div className={`praying_azkar ${theme} `} >
       <Azkar data={data} nameOfAzkar={' أذكار المسجد  '} />
    </div>
  )
}

export default AzkarMasged