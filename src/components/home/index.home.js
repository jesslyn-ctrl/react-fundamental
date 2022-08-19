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
      <br />
      <Container id="container">
        <Row className="px-4 my-5">
          <Col sm={7}>
            <Image src={welcomeUrl} fluid rounded />
          </Col>
          <Col sm={5}>
            <br />
            <h1>HOMEPAGE 😊👻</h1>
            <p>
              1. Routing <b>URL Posts</b> dengan isian component dari API post
              berikut: https://jsonplaceholder.typicode.com/posts berdasarkan
              Title.
              <br />
              2. Modifikasi UI Homepage.
              <br />
              3. Aktivasi navigation bar (ketika default atau ketika berada di
              routing menunya).
              <br />
              4. Ketika Title pada menu Posts ditekan, tampilkan modal popup
              berisi ID, Title dan Deskripsi Post.
              <br />
              5. Kreatifitas UI masing-masing.
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
                  Keep coding and never give up! Don't forget to eat pizza~ 🍕{" "}
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
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Home;
