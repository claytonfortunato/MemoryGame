import Card from "../../components/Card";
//Types
import { createBoard } from "../../types/setup";
import { shuffleArray } from "../../utilis";
import { CardType } from "../../types/setup";
//Styles
import * as C from "./styles";
import React, { useEffect, useState } from "react";

export const App = () => {
  const [cards, setCards] = useState<CardType[]>(shuffleArray(createBoard()));
  const [gameWon, setGameWon] = useState(false);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [clickedCard, setClickedCard] = useState<undefined | CardType>(
    undefined
  );

  useEffect(() => {
    if (matchedPairs === cards.length / 2) {
      setGameWon(true);
      alert("Voce conseguiu");
    }
  }, [matchedPairs]);

  const handleCardClick = (currentClickedCard: CardType) => {
    // Vire a carta
    setCards((prev) =>
      prev.map((card) =>
        card.id === currentClickedCard.id
          ? { ...card, flipped: true, clickable: false }
          : card
      )
    );
    // Se esta é a primeira carta que é virada
    // apenas mantenha-o invertido
    if (!clickedCard) {
      setClickedCard({ ...currentClickedCard });
      return;
    }

    // Se for uma partida
    if (clickedCard.matchingCardId === currentClickedCard.id) {
      setMatchedPairs((prev) => prev + 1);
      setCards((prev) =>
        prev.map((card) =>
          card.id === clickedCard.id || card.id === currentClickedCard.id
            ? { ...card, clickable: false }
            : card
        )
      );
      setClickedCard(undefined);
      return;
    }

    // Se não for um par combinado, espere um segundo e vire-os de volta
    setTimeout(() => {
      setCards((prev) =>
        prev.map((card) =>
          card.id === clickedCard.id || card.id === currentClickedCard.id
            ? { ...card, flipped: false, clickable: true }
            : card
        )
      );
    }, 1000);

    setClickedCard(undefined);
  };
  return (
    <C.Container>
      <C.Header>Jogo da Memória</C.Header>
      <C.Wrapper>
        {cards.map((card) => (
          <Card key={card.id} card={card} callback={handleCardClick} />
        ))}
      </C.Wrapper>
    </C.Container>
  );
};
