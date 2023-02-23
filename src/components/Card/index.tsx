import React from "react";
// Types
import { CardType } from "../../setup";
// Styles
import * as C from "./styles";

type Props = {
  card: CardType;
  callback: (card: CardType) => void;
};

const Card: React.FC<Props> = ({ card, callback }) => {
  const handleClick = () => {
    if (card.clickable) callback(card);
  };

  return (
    <C.Wrapper onClick={handleClick}>
      <C.FrontImg
        flipped={card.flipped}
        src={card.frontImage}
        alt="card-front"
      />
      <C.BackImg flipped={card.flipped} src={card.backImage} alt="card-back" />
    </C.Wrapper>
  );
};

export default Card;
