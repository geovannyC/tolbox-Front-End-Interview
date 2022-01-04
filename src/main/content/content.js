import React, { useImperativeHandle, forwardRef } from "react";
import { Card, ListGroup, Container, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import useForceUpdate from "use-force-update";
export const Content = forwardRef((props, ref) => {
  const isLoggedIn = useSelector((state) => state.reducerTest.isLogin);
  const dataWords = useSelector((state) => state.reducerDataWords.dataWord);
  const forceUpdate = useForceUpdate();
  const dispatch = useDispatch();
  //Uso de useImperativeHandle para registrar la info traida desde navigator
  useImperativeHandle(ref, () => ({
    callFnHandleChangueDataWords(word) {
      handleIncrementWords(word);
    },
  }));
  //Uso de redux para el manejo de la info
  const handleIncrementWords = (word) => {
    let wordRecived = word.palindrome?`The word ${word.text} is a Palindrom`:`Word Invested is ${word.text}`
    dispatch({
      type: "INCREMENT",
      payload: {
        dataWord: wordRecived,
      },
    });
    return forceUpdate();
  };
  //Manejo y dibujo del contenido
  const ContentCard = () => {
    return (
      <Card style={{ width: "18rem" }}>
        <ListGroup variant="flush">
          {dataWords.map((item) => {
            return <ListGroup.Item key={item}>{item}</ListGroup.Item>;
          })}
        </ListGroup>
      </Card>
    );
  };
  //Card contenedor del contenido
  const ContainerCard = () => {
    return (
      <Container
        fluid="lg"
        style={{
          paddingTop: "2%",
        }}
      >
        <Row className="justify-content-md-center ">
          <Card
            style={{
              padding: "2%",
            }}
          >
            <Card.Title
              style={{
                color: "#BABABA",
              }}
            >
              Results:
            </Card.Title>
            <Card.Body
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                alignContent: "center",
              }}
            >
              {ContentCard()}
            </Card.Body>
          </Card>
        </Row>
      </Container>
    );
  };
  return ContainerCard();
});
