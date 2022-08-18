// Parent Component
import React, { useEffect, useRef, useState } from "react";
import Albums from "./components/albums/index.albums";
import MainLayouts from "./components/layouts/main.layout";
import Navigation from "./components/layouts/navigation.layouts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Posts from "./components/posts/index.posts";
import Home from "./components/home/index.home";
import "./components/stylesheets/style.css";
import FooterMdb from "./components/layouts/footer.layouts";

const App = () => {
  const navTitle = "REACTMEH";
  return (
    <>
      <Router>
        <Navigation siteTitle={navTitle} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/albums" element={<Albums />} />
          <Route path="/posts" element={<Posts />} />
          <Route
            path="*"
            element={<h1 className="text-center text-danger">404 NOT FOUND</h1>}
          />
        </Routes>
      </Router>

      <FooterMdb />
    </>
  );
};

export default App;
