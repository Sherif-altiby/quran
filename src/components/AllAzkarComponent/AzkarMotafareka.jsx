import  { useMainContext } from "../../Context/MainContext"
import {data} from '../Data/AzkarMotafarekaData'
import Azkar from "./Azkar"

const AzkarMotafareka = () => {
     
  const { theme } = useMainContext()
    
  return (
    <div className={`praying_azkar ${theme} `} >
       <Azkar data={data} nameOfAzkar={' أذكار متفرقة  '} />
    </div>
  )
}

export default AzkarMotafareka