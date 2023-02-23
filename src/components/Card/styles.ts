import styled from "styled-components";
import theme from "../../theme";

export const Container = styled.div``;

export const Content = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
`;

export const Front = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.light};

  &:hover {
    transform: rotateY(180deg);
  }
`;

export const Back = styled.div`
  background-color: ${theme.colors.secondary};
  color: ${theme.colors.dark};
`;
