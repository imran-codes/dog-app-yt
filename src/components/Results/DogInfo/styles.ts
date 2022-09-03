import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
  font-size: 1.4rem;
  padding: 20px;
  border-radius: 16px;
  background-color: ${(props) => props.theme.button};
  color: ${(props) => props.theme.light};
`;
