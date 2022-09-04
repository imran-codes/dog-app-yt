import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  margin-bottom: 100px;
  background-color: ${(props) => props.theme.background};
`;

export const Description = styled.div`
  margin: 20px auto;
  padding: 15px;
  text-align: center;
  max-width: 70vw;

  li {
    list-style: none;
  }

  img {
    width: 200px;
    padding-top: 10px;
  }
`;

export const AppBody = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  margin: auto;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;
