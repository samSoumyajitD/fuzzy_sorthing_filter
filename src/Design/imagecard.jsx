import React, { useState, useEffect } from "react";
import "./d_project.css";
import CardPopup from "./CardPopup"; // Assuming this file is in the same directory

const Card = (props) => {
  const [selectedCard, setSelectedCard] = useState(null);

  const [designpopupVisibility, setdesignpopupVisibility] = useState(false);

  useEffect(() => {
    if (designpopupVisibility) {
      document.body.classList.add("body-no-scroll");
    } else {
      document.body.classList.remove("body-no-scroll");
    }
  }, [designpopupVisibility]);

  const openCardContent = (card) => {
    setSelectedCard(card);
    setdesignpopupVisibility(true);
  };

  const closeCardContent = (event) => {
    setdesignpopupVisibility(false);
    event.stopPropagation();
    setSelectedCard(null);
  };

  const closeCardContentonesc = () => {
    setdesignpopupVisibility(false);
    setSelectedCard(null);
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.keyCode === 27) {
        closeCardContentonesc(); // Call closeCardContent on Escape key
      }
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div className="card_fs" onClick={() => openCardContent(props)}>
      <div
        style={{ backgroundImage: `url(${props.imgUrl})` }}
        className="card_fs_img"
      ></div>
      <div className="card-content_fs">
        <div className="card-content_fs1">
          {props.date} {" - "} {props.city} {", "} {props.state}
        </div>
        <div className="card-content_fs2">{props.title}</div>
      </div>
      {selectedCard && (
        <CardPopup cardData={selectedCard} onClose={closeCardContent} />
      )}
    </div>
  );
};

const CardContainer = (props) => {
  return (
    <div className="cards-container_fs">
      {props.cards.map((card) => (
        <Card
          key={card.id}
          title={card.title}
          content={card.content}
          date={card.date}
          city={card.city}
          state={card.state}
          imgUrl={card.imgUrl}
        />
      ))}
    </div>
  );
};

export default CardContainer;
