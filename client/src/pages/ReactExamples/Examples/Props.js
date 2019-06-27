import React from "react";
import Prism from "../../../components/common/Prism";
import { Container, Title, Content } from "bloomer";

//../../../common/Prism

function Props() {
  return (
    <Container>
      <Content>
        <Title hasTextAlign="centered">Menus Available</Title>
        <p>
         Menu # 1
        </p>
        <Prism>
          {`A classic sandwich favorite, customized to order

`}
        </Prism>
      </Content>
      <Content>
        <p>
          Menu # 2
        </p>
        <Prism>
          {`A food with a sharp taste. Often used to refer to tart or sour foods as well

`}
        </Prism>
      </Content>
      <Content>
        <p>
          Menu # 3  
        </p>
        <Prism>
          {`A taste that mimics the feeling of cold temperature. Often used to describe mint.

`}
        </Prism>
      </Content>
    </Container>
  );
}

export default Props;
