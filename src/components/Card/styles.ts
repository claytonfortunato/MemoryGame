import styled from "styled-components";
import theme from "../../theme";

export const Container = styled.div``;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  width: 200px;
  height: 200px;
  transform-style: preserve-3d;
  transition: transform 600ms ease-in-out;
  &:hover {
    transform: rotateY(180deg);
  }
`;

export const Front = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.light};
  backface-visibility: hidden;
`;

export const Back = styled.div`
  background-color: ${theme.colors.secondary};
  color: ${theme.colors.dark};
  transform: rotateY(180deg);
  width: 200px;
  height: 200px;
`;
