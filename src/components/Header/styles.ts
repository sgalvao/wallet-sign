import styled from "styled-components";
import media from "styled-media-query";

type Props = {
  isConnected?: boolean;
};

export const Container = styled.div`
  display: flex;
  max-width: 130rem;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 4rem;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.02);
`;

export const Logo = styled.div`
  font-size: 2.6rem;
  color: white;
  font-weight: normal;
  font-family: "Poppins", sans-serif;

  svg {
    fill: #fe613c;
  }
`;

export const Divider = styled.div`
  width: 1px;
  height: 2rem;
  margin: 0 1.2rem;
  background-color: rgba(255, 255, 255, 0.3);
`;

export const Title = styled.h1`
  font-size: 1.8rem;
  color: rgba(255, 255, 255, 0.3);
  font-weight: normal;
  font-family: "Poppins", sans-serif;
  ${media.lessThan("medium")`
    display:none;
    `}
`;

export const Button = styled.button<Props>`
  display: flex;
  align-items: center;
  flex: 0;
  padding: 1rem 2rem;
  outline: none;
  border: none;
  border-radius: 32px;
  color: rgb(255, 255, 255);
  width: 30rem;
  max-width: min-content;

  background: rgb(34, 106, 237);
  transition: all 0.1s ease-in-out 0s;

  svg {
    margin-left: 1rem;
    ${media.lessThan("medium")`
    width: 4rem;
    height: 4rem;
    margin: 0;
    `}
  }

  p {
    font-size: 1.8rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: ${({ isConnected }) => isConnected && "10rem"};

    ${media.lessThan("medium")`
    display: none;
    `}
  }
`;
