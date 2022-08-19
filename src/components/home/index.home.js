// Children Component
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Image, Card, Button } from "react-bootstrap";
import "./../stylesheets/style.css";

const Home = (props) => {
  const welcomeUrl =
    "https://userguiding.com/wp-content/uploads/2020/10/welcome-page.jpg";
  const cardImgUrl = [
    "https://i.pinimg.com/originals/06/ed/16/06ed16be4e898a5f21c7b2b651262c92.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-flk6eptK2uJPMGYd57XETLM-C3lyDfglTBbT47NWl9GgTe20yYnZytM0JltTGxufxB0&usqp=CAU",
  ];

  return (
    <React.Fragment>
      <Container id="container">
        <Row className="px-4 my-5">
          <Col sm={7}>
            <Image src={welcomeUrl} fluid rounded />
          </Col>
          <Col sm={5}>
            <br />
            <h1>HOMEPAGE 😊👻</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
          </Col>
        </Row>
        <Row>
          <Card>
            <Card.Header>Quote</Card.Header>
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <p>
                  {" "}
                  Just do your thing and never give up! Don't forget to eat
                  pizza~ 🍕{" "}
                </p>
                <footer className="blockquote-footer">
                  Someone famous in <cite title="Source Title">IDK</cite>
                </footer>
              </blockquote>
            </Card.Body>
          </Card>
        </Row>
        <Row className="px-4 my-5">
          <Col className="mb-3">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={cardImgUrl[0]}
                style={{ height: "10rem" }}
              />
              <Card.Body>
                <Card.Title>Cat 1</Card.Title>
                <Card.Text>
                  Some quick text just to say "meow, meow, meow, meow, meow,
                  meow, meow".
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className="mb-3">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={cardImgUrl[1]}
                style={{ height: "10rem" }}
              />
              <Card.Body>
                <Card.Title>Cat 2</Card.Title>
                <Card.Text>
                  Some quick text just to say "meow, meow, meow, meow, meow,
                  meow, meow".
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className="mb-2">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={cardImgUrl[0]}
                style={{ height: "10rem" }}
              />
              <Card.Body>
                <Card.Title>Cat 3</Card.Title>
                <Card.Text>
                  Some quick text just to say "meow, meow, meow, meow, meow,
                  meow, meow".
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Home;
