import React from "react";
import { Hero, HeroBody, Title } from "bloomer";
import Navbar from "../../common/Navbar";

function Home(props) {
  return (
    <div>
      <Hero isColor="info" isSize="medium">
        <HeroBody hasTextAlign="centered">
          <Title>Welcome admin!</Title>
          <p style={{ maxWidth: 600, margin: "auto" }}>
            This is the main page for management of the bussiness.
          </p>
        </HeroBody>
      </Hero>
    </div>
  );
}

export default Home;
