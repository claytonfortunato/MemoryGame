import * as C from "./styles";
import { Card } from "../../components/Card";

const handleClick = (id: string) => {
  console.log(id);
};

export const App = () => {
  return (
    <C.Container>
      <Card
        back="
🐸"
        flipped
        id="1"
        handleClick={handleClick}
      />
      <Card
        back="
🐸"
        flipped
        id="2"
        handleClick={handleClick}
      />
      <Card
        back="
🐸"
        flipped
        id="3"
        handleClick={handleClick}
      />
    </C.Container>
  );
};
