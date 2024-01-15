
import { useMainContext } from "../../Context/MainContext";
import { useNavigate } from "react-router-dom";
const Jus = () => {
  const { theme,setJushNumber } = useMainContext();
  const navigate = useNavigate()

  const juzsInfo = [
    { title: "الجزء الأول", id: 1 },
    { title: "الجزء الثاني", id: 2 },
    { title: "الجزء الثالث", id: 3 },
    { title: "الأول الرابع", id: 4 },
    { title: "الجزء الخامس", id: 5 },
    { title: "الجزء السادس", id: 6 },
    { title: "الجزء السابع", id: 7 },
    { title: "الجزء الثامن", id: 8 },
    { title: "الجزء التاسع", id: 9 },
    { title: "الجزء العاشر", id: 10 },
    { title: "الجزء الحادي عشر", id: 11 },
    { title: "الجزء الثاني عشر", id: 12 },
    { title: "الجزء الثالث عشر", id: 13 },
    { title: "الجزء الرابع عشر", id: 14 },
    { title: "الجزء الخامس عشر", id: 15 },
    { title: "الجزء السادس عشر", id: 16 },
    { title: "الجزء السابع عشر", id: 17 },
    { title: "الجزء الثامن عشر", id: 18 },
    { title: "الجزء التاسع عشر", id: 19 },
    { title: "الجزء العشرون", id: 20 },
    { title: "الجزء الحادي و العشرون", id: 21 },
    { title: "الجزء الثاني و العشرون", id: 22 },
    { title: "الجزء الثالث و العشرون", id: 23 },
    { title: "الجزء الرابع و العشرون", id: 24 },
    { title: "الجزء الخامس و العشرون", id: 25 },
    { title: "الجزء السادس و العشرون", id: 26 },
    { title: "الجزء السابع و العشرون", id: 27 },
    { title: "الجزء الثامن و العشرون", id: 28 },
    { title: "الجزء التاسع و العشرون", id: 29 },
    { title: "الجزء الثلاثون", id: 30 },
  ];

  const handleClick = (number)=>{
    setJushNumber(number)
    navigate('/surahs-of-jus');
  }

  return (
    <>
      <div className={"jus_all " + theme}>
        <div className="container">
          <div className="jus_all_content">
            {juzsInfo.map((item) => (
              <div className="jus" key={item.id} onClick={()=>handleClick(item.id)} >
                <div className="jus_name"> {item.title} </div>
                <div className="jus_number"> <span> {item.id} </span> </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Jus;
