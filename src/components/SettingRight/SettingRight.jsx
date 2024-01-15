import "./SettingRight.scss";
import { useMainContext } from "../../Context/MainContext";
import { Link, useNavigate } from "react-router-dom";

const SettingRight = () => {
  const { theme, asideBlock, setAsideBlock } = useMainContext();
  const navigate = useNavigate();
 
  const handleNavigate = (path) => {
    setAsideBlock(false)
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    })
    navigate(path)
  }

  const asideClass = asideBlock === true ? " block" : "";

  const navigation = [
    {
      id:111111,
      name: "الصفحة الرئيسية",
      to: "/",
      icon: "fa-solid fa-house",
    },
    {
      id:222222,
      name: "راديو القران",
      to: "/radio",
      icon: "fa-solid fa-radio",
    },
    {
      id:333333,
      name: "القراء",
      to: "/AllReader",
      icon: "fa-solid fa-tower-broadcast",
    },
    {
      id:444444,
      name: "صحيح البخاري",
      to: "/boukhary",
      icon: "fa-solid fa-book",
    },
    {
      id:555555,
      name: "صحيح مسلم",
      to: "/muslim",
      icon: "fa-solid fa-book",
    },
    {
      id:666666,
      name: "مواقيت الصلاة",
      to: "/praying",
      icon: "fa-solid fa-person-praying",
    },
    {
      id:7,
      name: "الاذكار",
      to: "/azkar",
      icon: "fa-solid fa-star",
    },
  ];
  return (
    <div className={"settinRight " + theme + asideClass}>
      <div className="head">
        <div className="exite" onClick={() => setAsideBlock(false)}>
          X
        </div>
        <div className="text"> القران الكريم </div>
      </div>
      <ul>
        <li>
          <h4> القائمة </h4>
        </li>
        {navigation.map((item) => (
          <li key={item.id} onClick={() => handleNavigate(item.to)} >
            <Link>
              {item.name}
              <div className="icon">
                <i className={item.icon}></i>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SettingRight;
