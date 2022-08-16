import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  border-bottom: 1px solid white;
  flex-direction: column;

  margin-bottom: 3rem;

  ${media.lessThan("medium")`
  max-width: 35rem;
  `}
  ${media.lessThan("large")`
  max-width: 60rem;
  `}
`;

export const Title = styled.h1`
  color: white;
  font-size: 3rem;
  margin-bottom: 1rem;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;

  ${media.lessThan("large")`
  max=width: 40rem;

  `}

  ${media.lessThan("medium")`
  max-width: 30rem;
    font-size: 2.6rem;
  `}
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 1rem;
  outline: none;
  border: none;
  color: white;
  font-size: 2rem;
  font-family: "Poppins";
  cursor: pointer;
  border-radius: 0.6rem;
  background-color: rgb(34, 106, 237);
  transition: 0.2s all ease-in;
  margin: 1rem;

  svg {
    margin-left: 0.2rem;
  }

  &:hover {
    background: #2742ef;
  }
`;
