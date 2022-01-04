import React from "react";
import { Navigator } from "../nav/navigator";
import { CardBackground } from "../card-background/cardBackground";
import "../../index.css";
export const Home = () => {
  const SchemmaHome = () => {
    return (
      <>
        <Navigator />
      
          <CardBackground />
      </>
    );
  };
  return SchemmaHome();
};
