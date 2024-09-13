import React from "react";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import html from "./html";


export interface AppProps
  extends AppProps,
    React.HTMLAttributes<HTMLElement> {}

const App = (): JSX.Element => {
  return (
      <Row
    className={
      css`
margin: 1em 0rem 3em;
`
    }>
        <Col>
        </Col>
      </Row>
      <Row>
        <Col>
        </Col>
      </Row>
  );
};

html.render("app", App, {});
