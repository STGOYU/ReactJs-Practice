import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";

function App() {

  const [people, setPeople] = useState(data);
  const [currentIndex, setCurrentIndex] = useState(0);


  return (
    <section className="section">
        <div className="title">
          <h2><span>slider</span>person</h2>
        </div>
        <div className="section-center">
          {people.map((person,index) => {
            const {id,image,name,title,quote} = person;
            
            return(
              <article key={id}>
                <img src={image} alt={name} className="person-img" />
                <h4>{name}</h4>
                <p className="title">{title}</p>
                <p className="text">{quote}</p>
                <FaQuoteRight className="icon" />
              </article>
            );
          })}
        </div>
    </section>
  );
}

export default App;
