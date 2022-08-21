// Children Component
import React from "react";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import "./../stylesheets/style.css";

const Home = (props) => {
  const welcomeUrl =
    "https://userguiding.com/wp-content/uploads/2020/10/welcome-page.jpg";

  return (
    <React.Fragment>
      <br />
      <Container id="container">
        <Row className="px-4 my-4">
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
      </Container>
    </React.Fragment>
  );
};

export default Home;
