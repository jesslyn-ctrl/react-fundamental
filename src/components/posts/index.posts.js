// Children Component
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import ListPost from "./list.posts";

const Posts = (props) => {
  return (
    <React.Fragment>
      <Container id="container">
        <ListPost />
      </Container>
    </React.Fragment>
  );
};

export default Posts;
