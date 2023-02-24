import styled from "styled-components";

export const Header = styled.div`
  h1 {
    text-transform: uppercase;
    font-size: 3rem;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);

  grid-gap: 0.5rem;
  max-width: 980px;
`;
