import React, {useState} from "react";
import {
  Nav,
  Navbar,
  Form,
  FormControl,
  Button,
  Container,
} from "react-bootstrap";
import styled from "styled-components";
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

export const Navigator = () => {
  const [loading, setLoading] = useState(false)
  const sendData = () => {
    if(loading){
      setLoading(false)
    }else{
      setLoading(true)
    }
  };
  const SchemmaNavigator = () => {
    return (
      <Styles>
        <Navbar expand="lg" className="justify-content-center">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Form className="form-center">
            <FormControl type="text" placeholder="Insert Text" className="" />
          </Form>
          <Container>
            <Button
              id="send-text"
              onClick={sendData}
              className="btn-navigator"
              variant="primary"
            >
              {loading?"Loading...":"Send Text"}
            </Button>
          </Container>
        </Navbar>
      </Styles>
    );
  };
  return SchemmaNavigator()
};
