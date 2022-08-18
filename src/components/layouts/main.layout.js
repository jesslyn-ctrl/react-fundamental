import { Container } from "react-bootstrap";
import Navigation from "./navigation.layouts";
import React from "react";

const MainLayouts = ({ children }) => {
  const title = "REACTMEH";
  return (
    <React.Fragment>
      <Navigation siteTitle={title} />
      {children}
    </React.Fragment>
  );
};

export default MainLayouts;
