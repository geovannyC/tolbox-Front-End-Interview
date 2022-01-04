import React, { useRef } from "react";
import { Navigator } from "../nav/navigator";
import { Content } from "../content/content";
import "../../index.css";
export const Home = () => {
  //Uso de ref para el llamado de las dunciones encargadas de inyextar la info
  const childRefCDW = useRef();
  const handleIncrementWords = (word) => {
    childRefCDW.current.callFnHandleChangueDataWords(word);
  };
  const SchemmaHome = () => {
    return (
      <>
        <Navigator callFnSendData={handleIncrementWords} />
        <Content ref={childRefCDW} />
      </>
    );
  };
  return SchemmaHome();
};
