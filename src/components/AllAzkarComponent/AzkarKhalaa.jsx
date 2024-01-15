import  { useMainContext } from "../../Context/MainContext"
import {data} from '../Data/AzkarKhalaaData'
import Azkar from "./Azkar"

const AzkarKhalaa = () => {
     
  const { theme } = useMainContext()
    
  return (
    <div className={`praying_azkar ${theme} `} >
       <Azkar data={data} nameOfAzkar={' اذكار الخلاء '} />
    </div>
  )
}

export default AzkarKhalaa