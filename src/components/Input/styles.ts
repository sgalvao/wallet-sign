import { InputHTMLAttributes } from "react";
import styled, { css } from "styled-components";

type InputProps = {
  error?: string | undefined | boolean;
  size?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  width: 100%;
`;

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.span`
  font-family: "Roboto", monospace;
  font-size: 1.5rem;
  font-weight: 700;
  color: #f8f8f8;
`;

export const Input = styled.input<InputProps>`
  ${({ error, size }) => css`
    width: 100%;
    height: ${size ? size : "3.5rem"};
    font-family: "Poppins", sans-serif;
    font-size: 1.5rem;
    font-weight: bold;
    padding: 0.6rem;
    background-color: #fefefe;
    border: 1px solid #000000;
    color: #000;
    &::placeholder {
      color: #000;
      font-family: "Poppins", sans-serif;
    }
    outline: none;
    border-radius: 0.5rem;
    margin: 1rem 0;
    border: 0.1rem solid ${error ? "red" : "black"};
  `}
`;

export const Error = styled.span`
  color: red;
  font-size: 1.2rem;
  padding: 0.8rem 0;
  color: red;
`;
