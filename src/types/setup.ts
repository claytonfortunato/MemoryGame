import card1 from "../../assets/card_1.png";
import card2 from "../../assets/card_2.png";
import card3 from "../../assets/card_3.png";
import card4 from "../../assets/card_4.png";
import card5 from "../../assets/card_5.png";
import card6 from "../../assets/card_6.png";
import card7 from "../../assets/card_7.png";
import card8 from "../../assets/card_8.jpg";

//Cardback
import cardBack from "../../assets/poke-bola.png";

export type CardType = {
  id: string;
  flipped: boolean;
  backImage: string;
  frontImage: string;
  clickable: boolean;
  matchingCardId: string;
};

// Colocar a imagem em um array
const cards: string[] = [
  card1,
  card2,
  card3,
  card4,
  card5,
  card6,
  card7,
  card8,
];

export const createBoard = (): CardType[] =>
  [...cards, ...cards].map((card, i) => ({
    id: `card${i}`,
    flipped: false,
    backImage: cardBack,
    frontImage: card,
    clickable: true,
    matchingCardId:
      i < cards.length ? `card${i + cards.length}` : `card${i - cards.length}`,
  }));
