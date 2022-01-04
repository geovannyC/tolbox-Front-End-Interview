import React from "react";
import { Card, Container, Row } from "react-bootstrap";
import { Content } from "../content/content";
export const CardBackground = () => {
  return (
    <Container
      fluid="lg"
      style={{
        paddingTop: "2%",
      }}
    >
      <Row className="justify-content-md-center ">
        <Card  style={{
        
         padding: "2%",
        }}>
          <Card.Title style={{
              color: "#BABABA"
          }}>Results:</Card.Title>
          <Card.Body
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
            }}
          >
            <Content />
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
};
