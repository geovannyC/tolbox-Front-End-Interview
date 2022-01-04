import React, { useState } from "react";
import { getData } from "../../until/fetch";
import {
  Nav,
  Navbar,
  Form,
  FormControl,
  Button,
  Container,
} from "react-bootstrap";
import styled from "styled-components";
//uso de estilos para la barra de navegación
const Styles = styled.div`
  .navbar {
    background-color: #f73a3a;
    display: flex;
    justify-content: center;
    width: 100%;
  }
  a,
  .navbar-nav,
  .navbar-light .nav-link {
    color: #9fffcb;
    &:hover {
      color: white;
    }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #9fffcb;
    &:hover {
      color: white;
    }
  }
  .form-center {
    width: 100%;
    padding-left: 35%;
  }
  .btn-navigator {
    background-color: #673af7;
  }
  .test {
    background-color: aquamarine;
  }
  .container-g {
    display: flex;
    justify-content: center;
    width: 100%;
  }
`;

export const Navigator = ({ callFnSendData }) => {
  const [loading, setLoading] = useState(false),
    [text, setText] = useState("");
    //envio de info manejo de la respuesta
  const sendData = async () => {
    if (text.length > 0) {
      const url = `iecho?text=${text}`;
      setLoading(true);
      await getData(url).then((response) => {
        if (response) {
          if (response.palindrome) {
            callFnSendData({
              palindrome: true,
              text: text,
            });
          } else {
            callFnSendData(response);
          }
          setLoading(false);
        } else {
          setLoading(false);
        }
      });
    } else {
      return false;
    }
  };
  // ingreso del valor en el inut de la barra de navegación
  const handleChangueText = (event) => {
    let txt = event.target.value.replace(/[^a-zA-Z ]/g, "").toLowerCase();
    setText(txt);
  };
  // esquema de la barra de nav
  const SchemmaNavigator = () => {
    return (
      <Styles>
        <Navbar expand="lg" className="justify-content-center">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Form onSubmit type="text" className="form-center">
            <FormControl
              type="text"
              placeholder="Insert Text"
              onChange={handleChangueText}
              value={text}
            />
          </Form>
          <Container>
            <Button
              id="send-text"
              onClick={sendData}
              className="btn-navigator"
              variant="primary"
              disabled={loading}
            >
              {loading ? "Loading..." : "Send Text"}
            </Button>
          </Container>
        </Navbar>
      </Styles>
    );
  };
  return SchemmaNavigator();
};
