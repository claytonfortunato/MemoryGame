import * as C from "./styles";

interface CardProps {
  id: string;
  flipped?: boolean;
  back: string;
  handleClick?: (id: string) => void;
}

export const Card = ({ flipped = false, back, handleClick, id }: CardProps) => {
  const handleClickFn = (id: string) => {
    if (handleClick) {
      handleClick(id);
    }
  };

  return (
    <C.Container onClick={() => handleClickFn}>
      <C.Content>
        <C.Front>Parte da frente do card</C.Front>
        <C.Back>{back}</C.Back>
      </C.Content>
    </C.Container>
  );
};
