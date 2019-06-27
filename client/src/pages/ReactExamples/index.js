import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Props from "./Examples/Props";
import {
  Container,
  Hero,
  HeroBody,
  HeroFooter,
  Title,
  Tab,
  Tabs,
  TabList
} from "bloomer";

function ReactExamples(props) {

  return (
    <>
      <Hero isFullWidth style={{marginBottom: 20}} isColor="info" isSize="medium">
        <HeroBody>
          <Container hasTextAlign="centered">
            <Title>Customer Menu</Title>
          </Container>
        </HeroBody>

        <HeroFooter>
          <Tabs isBoxed isFullWidth>
            <Container>
              <TabList>
                <Tab
                  isActive={
                    props.location.pathname === `${props.match.path}/overview`
                  }
                >
                  <Link to={`${props.match.path}/overview`}>Menus Available</Link>
                </Tab>
                <Tab
                  isActive={
                    props.location.pathname === `${props.match.path}/grid`
                  }
                >
                  <Link to={`${props.match.path}/grid`}>Table Reserve</Link>
                </Tab>
              </TabList>
            </Container>
          </Tabs>
        </HeroFooter>
      </Hero>
      <Switch>
        <Route path={`${props.match.path}/overview`} component={Props} />
        <Route component={() => <Title hasTextAlign="centered">Select a tab to view the Menu or Reserve a Table!</Title>}/>
        
      </Switch>
    </>
  );
}

export default ReactExamples;
