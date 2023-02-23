import card1 from "../assets/burlbassaro.png";
import card2 from "../assets/charizard.png";
import card3 from "../assets/charmander.png";
import card4 from "../assets/dog.png";
import card5 from "../assets/gengar.png";
import card6 from "../assets/pikachu.jpg";
import card7 from "../assets/snorlax.png";
import card8 from "../assets/squirtle.jpg";
//Cardback
import cardBack from "../assets/pokebola.png";

export type CardType = {
  id: string;
  flipped: boolean;
  backImage: string;
  frontImage: string;
  handleClick: boolean;
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
    handleClick: true,
    matchingCardId:
      i < card.length ? `cards${i + card.length}` : `card${i - cards.length}`,
  }));
