import React from "react";
import { useMainContext } from "../../Context/MainContext";
import { NavLink } from "react-router-dom";

const SurahFilter = () => {
  const { theme } = useMainContext();
  return (
    <div className={"all_surah_filter " + theme}>
      <div className="container">
        <div className="surah_filter">
          <ul>
            <li className="">
              <NavLink to="surah"> سورة </NavLink>
            </li>
            <li>
              <NavLink to="jus"> جزء </NavLink>
            </li>
            <li>
              <NavLink to="wahie"> ترتيب نزول الوحي </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SurahFilter;
