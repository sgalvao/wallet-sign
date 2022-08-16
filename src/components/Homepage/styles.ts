import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 2rem;
`;

export const Title = styled.h1`
  font-weight: normal;
  color: white;
  font-size: 2.8rem;
`;

export const Content = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 3rem;
  margin: 2rem;

  ${media.lessThan("large")`
   grid-template-columns: repeat(2, 1fr);
  `}
  ${media.lessThan("medium")`
   grid-template-columns: 1fr;
  `}
`;

export const Collection = styled.div``;
