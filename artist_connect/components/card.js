// components/Card.js
import React, { useState } from "react";
import styles from "../styles/Card.module.css"; // Import CSS module

const Card = ({ card, index, handleCardClick }) => {
  const [isFlipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!isFlipped);
    handleCardClick(index);
  };

  return (
    <div
      className={`${styles.card} ${isFlipped ? styles.flipped : ""}`}
      onClick={handleClick}
    >
      {isFlipped ? ( // 뒷면일 때
        <div className={styles["card-back"]}>
          <p>{card.description}</p>
          <a href={card.link} target="_blank" rel="noopener noreferrer">
            Link
          </a>
        </div>
      ) : (
        // 앞면일 때
        <div className={styles["card-front"]}>
          <img src={card.imageUrl} alt={card.title} />
          <h3>{card.title}</h3>
        </div>
      )}
    </div>
  );
};

export default Card;
