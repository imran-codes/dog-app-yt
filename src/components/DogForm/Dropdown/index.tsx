import React from "react";
import { Container, DropdownContainer, ErrorText } from "./styles";

interface Props {
  showError?: boolean;
  title: string;
  children: React.ReactNode;
}

function Dropdown({ title, children, showError }: Props) {
  return (
    <Container>
      <h5>{title}</h5>
      <DropdownContainer showError={showError}>{children}</DropdownContainer>
      {showError && <ErrorText>Please choose a breed above</ErrorText>}
    </Container>
  );
}

export default Dropdown;
