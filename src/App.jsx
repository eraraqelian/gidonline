import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Container from "./Components/Container/Container";
import Recommended from "./Components/Recommended/Recommended";
import Films from "./Components/Films/Films";
import Footer from "./Components/Footer/Footer";
import Movie from "./Components/movie/Movie";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Container />
              <Recommended />
              <Films />
              <Footer />
            </>
          }
        />
        <Route path="/movie" element={<Movie />} />
      </Routes>
    </Router>
  );
};

export default App;
