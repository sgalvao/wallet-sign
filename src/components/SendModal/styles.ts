import styled from "styled-components";
import media from "styled-media-query";

interface Props {
  isOpen?: boolean;
  cancel?: boolean;
}

export const Overlay = styled.div<Props>`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(3px);
  z-index: 10;
  animation: fadeIn 0.6s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Container = styled.div<Props>`
  .MuiTextField-root {
    width: 20rem;
    input {
      font-size: 1.2rem;

      &::placeholder {
        font-size: 1.2rem;
      }
    }
  }

  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  width: 85%;
  z-index: 11;
  padding: 2rem 2rem 4rem 2rem;
  border-radius: 2rem;
  background-color: #fcfcfc;
  border: 1px solid #fe613c;
  animation: fadeIn 0.5s ease-in-out;

  svg {
    fill: #fe613c;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  ${media.greaterThan("medium")`
    width: 52rem;
  `}
`;

export const Title = styled.h1`
  font-size: 2.4rem;
  font-family: "Poppins", monospace;
  font-weight: bold;
  color: #000;
  margin: 0;
  text-align: center;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button<Props>`
  color: black;
  margin: 2rem 2rem;
  padding: 1rem 2rem;
  outline: none;
  border: 1px solid rgba(0, 0, 0, 0.29);
  border-radius: 1.2rem;
  font-family: "Bebas Neue";
  font-size: 1.8rem;
  cursor: pointer;
  transition: all 0.2s ease-in;

  &:hover {
    color: ${({ cancel }) => (cancel ? "#FC2B2B" : "#90FA10")};
    border: 1px solid ${({ cancel }) => (cancel ? "#FC2B2B" : "#90FA19")};
  }
`;
