import React from 'react';
import { RxCross2 } from "react-icons/rx";


const CardPopup = ({ cardData, onClose }) => {
  const { title, content, imgUrl } = cardData;

  return (
    <div className="card-popup">
        <div className="misson-popup">
            <div className="misson-popup-content">
                <RxCross2 
                    onClick={onClose}
                className="x"
                />
                <div className="podcasts-pop">
                <img style={{width: "100%", height : "400px"}} src={imgUrl} alt={title} />
                <div className="podcasts-pop-text">
                    <h1>{title}</h1>
                <p className="mission-para">
                {content}
                </p>
                </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default CardPopup;
