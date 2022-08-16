import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border-radius: 1rem;
  background: #f3f3f3;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 2rem;
`;

export const Title = styled.h1`
  color: black;
  font-size: 3rem;
  margin: 2rem;
`;

export const Text = styled.p`
  font-family: "Poppins";
  font-size: 2rem;
`;

export const Button = styled.button`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  color: white;
  font-size: 2.6rem;
  background: #236aed;
  border: none;
  border-radius: 2rem;
  margin: 2rem;
  cursor: pointer;

  svg {
    margin-left: 1rem;
  }
`;
