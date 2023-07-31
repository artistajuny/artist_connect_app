// index.js
import { FaChevronCircleDown } from "react-icons/fa";
import { FaUser, FaBookOpen, FaEye } from "react-icons/fa";
import { FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa";
import Card from "../components/card";
import styles from "../styles/Home.module.css";
import React, { useState } from "react";
import Link from "next/link";
import AppLayout from "../components/AppLayout";

const initialCardData = [
  {
    id: 1,
    title: "Card 1",
    description: "This is the description of Card 1.",
    imageUrl: "https://via.placeholder.com/300",
    link: "https://example.com/card1",
    isFlipped: false,
  },
  {
    id: 2,
    title: "Card 2",
    description: "This is the description of Card 2.",
    imageUrl: "https://via.placeholder.com/300",
    link: "https://example.com/card2",
    isFlipped: false,
  },
  {
    id: 3,
    title: "Card 3",
    description: "This is the description of Card 3.",
    imageUrl: "https://via.placeholder.com/300",
    link: "https://example.com/card3",
    isFlipped: false,
  },
  {
    id: 4,
    title: "Card 4",
    description: "This is the description of Card 4.",
    imageUrl: "https://via.placeholder.com/300",
    link: "https://example.com/card4",
    isFlipped: false,
  },
  {
    id: 1,
    title: "Card 1",
    description: "This is the description of Card 1.",
    imageUrl: "https://via.placeholder.com/300",
    link: "https://example.com/card1",
    isFlipped: false,
  },
  {
    id: 2,
    title: "Card 2",
    description: "This is the description of Card 2.",
    imageUrl: "https://via.placeholder.com/300",
    link: "https://example.com/card2",
    isFlipped: false,
  },
  {
    id: 3,
    title: "Card 3",
    description: "This is the description of Card 3.",
    imageUrl: "https://via.placeholder.com/300",
    link: "https://example.com/card3",
    isFlipped: false,
  },
  {
    id: 4,
    title: "Card 4",
    description: "This is the description of Card 4.",
    imageUrl: "https://via.placeholder.com/300",
    link: "https://example.com/card4",
    isFlipped: false,
  },
  // Add more card data as needed
];
export default function Home() {
  const [cards, setCards] = useState(initialCardData);
  const [showMore, setShowMore] = useState(false);

  const handleScrollToPortfolio = () => {
    const portfolioSection = document.getElementById("portfolio");
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleCardClick = (index) => {
    setCards((prevCards) => {
      const newCards = [...prevCards];
      newCards[index].isFlipped = !newCards[index].isFlipped;
      return newCards;
    });
  };

  const handleShowMore = () => {
    setShowMore((prevShowMore) => !prevShowMore);
  };

  const portfolio = showMore ? cards : cards.slice(0, 6);
  return (
    <AppLayout>
      <main>
        <div className={styles.main_cover}>
          <div className={styles.name}>
            <h3>Art world by</h3>
            <h2>ARTISTA</h2>
            <h2>JUNY</h2>
          </div>
          <div className={styles.nameinfo}>
            designer :
            <br /> coder :
            <br /> biologist :
            <br /> astronomer :
            <br /> educator :
            <br />
          </div>
          <div className={styles.down} onClick={handleScrollToPortfolio}>
            <FaChevronCircleDown aria-hidden="true" size="40px" />
          </div>
        </div>
        <div className={styles.about}>
          <div className={styles.about_title}>
            <h1 className={styles.title}>about</h1>
          </div>
          <div className={styles.about_wrap}>
            <div className={styles.about_flex}>
              <FaUser className={styles.about_icon} />
              <p>dsdsdsdasdasdsad</p>
            </div>
            <div className={styles.about_flex}>
              <FaBookOpen className={styles.about_icon} />
              <p>dsdsdsdasdasdsad</p>
            </div>
            <div className={styles.about_flex}>
              <FaEye className={styles.about_icon} />
              <p>dsdsdsdasdasdsad</p>
            </div>
          </div>
        </div>
        <div className={styles.portfolio_container} id="portfolio">
          <h1 className={styles.title}>portfolio</h1>
          <div className={styles.portfolio}>
            {cards.slice(0, showMore ? 8 : 4).map(
              (
                card,
                index // 조건에 따라 최대 3개 또는 6개의 카드만 보이도록 조절
              ) => (
                <Card
                  key={card.id}
                  card={card}
                  index={index}
                  handleCardClick={handleCardClick}
                />
              )
            )}
          </div>
          {cards.length > 6 && (
            <div className={styles.show_more_btn}>
              <button onClick={handleShowMore}>
                {showMore ? "닫기" : "더보기"}
              </button>
            </div>
          )}
        </div>
        <div className={styles.contact}>
          <h1 className={styles.title}>contact</h1>
          <div className={styles.contact_wrap}>
            <Link href="/" legacyBehavior>
              <FaEnvelope className={styles.contact_icon} />
            </Link>
            <Link href="/" legacyBehavior>
              <FaInstagram className={styles.contact_icon} />
            </Link>
            <Link href="/" legacyBehavior>
              <FaTwitter className={styles.contact_icon} />
            </Link>
          </div>
          <p className={styles.copyright_text}>
            Copyright &copy; 2023 All Rights Reserved by
            <Link href="/"> Artistjuny</Link>.
          </p>
        </div>
      </main>
    </AppLayout>
  );
}
