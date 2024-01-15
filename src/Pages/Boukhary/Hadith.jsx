import "./Boukhary.scss";
import React, { useEffect, useState } from "react";
import { useMainContext } from "../../Context/MainContext";
import axios from "axios";
import Loading from "../../components/Loading/Loading";

const Hadith = () => {
  const { theme } = useMainContext();

  const [allHdith, setAllHadith] = useState(null);

  useEffect(() => {
    const myCtegory = localStorage.getItem("category")
      ? localStorage.getItem("category")
      : "Revelation";

    const myCollection = localStorage.getItem("collection")
      ? localStorage.getItem("collection")
      : "Sahih Bukhari";

    const fetchHadith = async () => {
      const options = {
        method: "GET",
        url: "https://hadiths-api.p.rapidapi.com/hadiths",
        params: {
          collection: myCollection,
          category: myCtegory,
        },
        headers: {
          "X-RapidAPI-Key":
            "d6c83c792dmshb54922b9f8ad47ep187303jsn12edad3c9197",
          "X-RapidAPI-Host": "hadiths-api.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        setAllHadith(response.data.hadiths);
        console.log((response.data.hadiths))
      } catch (error) {
        console.error(error);
      }
    };
    fetchHadith();
   }, []);



  return (
    <div className={`hadiths ${theme}`}>
      <div className="container">
        <div className="all_hadiths">
          {allHdith ? (
            allHdith.length > 0 ? (
              allHdith.map((item) => (
                <div className="hadith" key={item.id}>
                  {item.Arabic_Hadith}
                </div>
              ))
            ) : (
              <Loading />
            )
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </div>
  );
};

export default Hadith;
