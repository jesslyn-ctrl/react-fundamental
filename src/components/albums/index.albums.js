// Childern Component
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Collection from "./collection.albums";

const Albums = (props) => {
  return (
    <React.Fragment>
      <Container id="container">
        <Collection />
      </Container>
    </React.Fragment>
  );
};

export default Albums;
