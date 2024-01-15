import  { useMainContext } from "../../Context/MainContext"
import {data} from '../Data/AzkarHajData'
import Azkar from "./Azkar"

const AzkarHaj = () => {
     
  const { theme } = useMainContext()
    
  return (
    <div className={`praying_azkar ${theme} `} >
       <Azkar data={data} nameOfAzkar={'  أذكار الحج و العمرة '} />
    </div>
  )
}

export default AzkarHaj