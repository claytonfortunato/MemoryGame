import Card from "../../components/Card";
//Setup
import { createBoard } from "../../setup";
import { shuffleArray } from "../../utilis";

//Types
import { CardType } from "../../setup";
//Styles
import * as C from "./styles";
import { useState } from "react";

const handleClick = (id: string) => {
  console.log(id);
};

export const App = () => {
  const [cards, SetCards] = useState<CardType[]>(shuffleArray(createBoard()));
  const [gameWon, setGameWon] = useState(false);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [clickedCard, setClickedCard] = useState<undefined | CardType>(
    undefined
  );

  const handleCardClick = (currentClickedCard: CardType) => {
    //Virar a carta
    SetCards((prev) =>
      prev.map((card) =>
        card.id === currentClickedCard.id
          ? { ...card, flipped: true, clickable: false }
          : card
      )
    );
    //Se esta é a primeira carta que é virada
    //Apenas mantenha invertido
    if (!clickedCard) {
      setClickedCard({ ...currentClickedCard });
      return;
    }

    // Se for uma partida
    if (clickedCard.matchingCardId === currentClickedCard.id) {
      setMatchedPairs((prev) => prev + 1);
      SetCards((prev) =>
        prev.map((card) =>
          card.id === clickedCard.id || card.id === currentClickedCard.id
            ? { ...card, clickable: false }
            : card
        )
      );
      setClickedCard(undefined);
      return;
    }

    //Se não for um par combinado, espere um segundo e vire-os de volta
    setTimeout(() => {
      SetCards((prev) =>
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
      {cards.map((card) => (
        <Card key={card.id} card={card} callback={handleCardClick} />
      ))}
    </C.Container>
  );
};
