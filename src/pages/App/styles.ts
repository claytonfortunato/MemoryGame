import styled from "styled-components";
import theme from "../../theme";

export const Box = styled.div`
  width: 980px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
`;

export const Header = styled.div`
  margin: 0.6rem 0rem;
  p {
    font-size: 1.2rem;
  }

  button {
    width: 100%;
    border: none;
    padding: 6px;
    border-radius: 10px;
    font-size: 1rem;
    cursor: pointer;
    opacity: 0.8;
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.light};
    transition: 0.3s all ease-in-out;
    margin: 0.2rem 0rem;
    &:hover {
      opacity: 1;
    }
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    54deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(144, 130, 221, 1) 50%,
    rgba(41, 133, 152, 1) 94%
  );
  h1 {
    text-transform: uppercase;
    font-size: 3rem;
  }
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-gap: 0.5rem;
`;
