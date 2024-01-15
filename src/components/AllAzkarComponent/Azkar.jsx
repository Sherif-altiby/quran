import React from "react";

const Azkar = ({ data, nameOfAzkar }) => {
  return (
    <div className="azkar container">
      <h1> {nameOfAzkar} </h1>
      {data.map((item) =>
        item.data ? (
          <div className="zekr" key={item.id}>
            <h1 className="name">{item.title}</h1>
            {item.data.map((item) => (
              <h2 className="doaaa" > <span> ** </span> {item} </h2>
            ))}
          </div>
        ) : (
          <div className="zekr" key={item.id}>
            {item.title && <p> {item.title} </p>}
            {item.name && <h1 className="name"> {item.name} </h1>}
            <h2> {item.text} </h2>
            {item.count && ( <p> <span> عدد التكرارات </span> {item.count} </p>)}
            {item.where && <p> {item.where} </p>}
            {item.info && <h4> {item.info} </h4>}
          </div>
        )
      )}
    </div>
  );
};

export default Azkar;
