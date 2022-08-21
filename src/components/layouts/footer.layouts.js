import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

const FooterMdb = () => {
  return (
    <MDBFooter
      bgColor="light"
      className="text-center text-lg-start text-muted mt-4"
    >
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with me on social networks:</span>
        </div>

        <div>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="twitter" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="google" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="instagram" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="2" lg="2" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon icon="gem" className="me-2" />
                Developer name
              </h6>
              <p>Jesslyn</p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Social Media</h6>
              <p>
                <a href="#!" className="text-reset">
                  Facebook
                </a>
              </p>
              <p>
                <a
                  href="https://www.instagram.com/_jesslynlyn/"
                  className="text-reset"
                >
                  Instagram
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  LinkedIn
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Discord
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Jakarta, Indonesia
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-2" />
                jesslynlyn@anyemail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-2" /> + 62 813 XXX XXX
              </p>
              <p>
                <MDBIcon icon="print" className="me-2" /> + 62 816 XXX XXX
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2022 Copyright:
        <a className="text-reset fw-bold" href="#!">
          HelloJesslyn.com
        </a>
      </div>
    </MDBFooter>
  );
};

export default FooterMdb;
