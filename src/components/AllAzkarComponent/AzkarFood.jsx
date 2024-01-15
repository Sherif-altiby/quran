import  { useMainContext } from "../../Context/MainContext"
import {data} from '../Data/AzkarFoodData'
import Azkar from "./Azkar"

const AzkarFood = () => {
     
  const { theme } = useMainContext()
    
  return (
    <div className={`praying_azkar ${theme} `} >
       <Azkar data={data} nameOfAzkar={' أذكار الطعام  '} />
    </div>
  )
}

export default AzkarFood