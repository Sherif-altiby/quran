import  { useMainContext } from "../../Context/MainContext"
import {data} from '../Data/AzkarManzelData'
import Azkar from "./Azkar"

const AzkarManzel = () => {
     
  const { theme } = useMainContext()
    
  return (
    <div className={`praying_azkar ${theme} `} >
       <Azkar data={data} nameOfAzkar={' أذكار المنزل  '} />
    </div>
  )
}

export default AzkarManzel