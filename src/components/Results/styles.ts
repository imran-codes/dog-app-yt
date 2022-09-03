import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.white};
  padding: 50px;
  border-radius: 16px;
  text-align: center;
  min-width: 50vw;
  max-width: 60vw;
  margin: auto;

  h1 {
    color: ${(props) => props.theme.primary};
  }
`;
