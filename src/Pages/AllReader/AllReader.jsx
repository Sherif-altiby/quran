import './AllReader.scss'
import { useMainContext } from '../../Context/MainContext'
import Readers from '../../components/Readers/Readers'

const AllReader = () => {
  const { theme } =useMainContext()
  return (
    <div className={`allreaders ${theme}`}  >
      <div className="search">
        <div className="overlay"></div>
        <h2> قراء القران </h2>
        <div className="search_area"> 
          <input type="text" placeholder='ابحث عن القارئ' />
          <div className="icon"> <i className="fa-solid fa-magnifying-glass"></i> </div>
         </div>
      </div>
      <Readers /> 
    </div>
  )
}

export default AllReader