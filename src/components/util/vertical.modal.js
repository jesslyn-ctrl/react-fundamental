import { Button, Modal } from "react-bootstrap";
import "./../stylesheets/style.css";

const MyVerticallyCenteredModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.id} - {props.title}
        </Modal.Title>
      </Modal.Header>
      <div className="line"></div>
      <Modal.Body>
        <p>{props.description}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={props.onHide}>
          <b>Close</b>
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MyVerticallyCenteredModal;
