import  { useMainContext } from "../../Context/MainContext"
import {data} from '../Data/AzkarOnSallahData'
import Azkar from "./Azkar"

const AzkarOnSallah = () => {
     
  const { theme } = useMainContext()
    
  return (
    <div className={`praying_azkar ${theme} `} >
       <Azkar data={data} nameOfAzkar={' أذكار الصلاة  '} />
    </div>
  )
}

export default AzkarOnSallah