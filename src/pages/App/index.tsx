import { Card } from "../../components/Card";
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

  console.log(createBoard());

  return <C.Container></C.Container>;
};
