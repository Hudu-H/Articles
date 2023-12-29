import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import PostDetails from "./components/PostDetails/PostDetails";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";

const App = () => {
  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <Navbar />
        <Routes>
          <Route path="/" exact Component={() => <Navigate to="/posts" />} />
          <Route path="/posts" exact Component={Home} />
          <Route path="/posts/search" exact Component={Home} />
          <Route path="/posts/:id" Component={PostDetails} />
          <Route path="/auth" exact Component={Auth} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
