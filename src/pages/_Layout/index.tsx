import React from "react";

import { Wrapper, Container } from "./styles";

const _Layout: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  );
};

export default _Layout;
