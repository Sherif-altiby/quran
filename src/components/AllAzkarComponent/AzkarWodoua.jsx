import  { useMainContext } from "../../Context/MainContext"
import {data} from '../Data/AzkarWodoaData'
import Azkar from "./Azkar"

const AzkarWodoua = () => {
     
  const { theme } = useMainContext()
    
  return (
    <div className={`praying_azkar ${theme} `} >
       <Azkar data={data} nameOfAzkar={' أذكار الوضوء   '} />
    </div>
  )
}

export default AzkarWodoua