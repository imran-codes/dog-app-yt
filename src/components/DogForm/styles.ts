import styled from "styled-components";

export const DogFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  align-items: center;
  justify-content: center;
  margin: 20px auto;
  padding: 15px;
  background-color: ${(props) => props.theme.white};
  border-radius: 10px;
`;
