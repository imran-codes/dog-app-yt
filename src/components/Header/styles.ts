import styled from "styled-components";

export const Container = styled.nav`
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.white};
  display: flex;
  text-transform: uppercase;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 10px;
  width: 100vw;
`;

export const LogoContainer = styled.div`
  padding: 10px;
  img {
    width: 40px;
    height: 40px;
    object-fit: contain;
  }
`;
export const TitleContainer = styled.div``;
