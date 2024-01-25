import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import { Routes, Route } from "react-router-dom";
import Success from "./components/Success";
import NotFound from "./components/NotFound";
import Project from "./components/Project";
import FeaturedProjects from "./components/FeaturedProjects";
import NewProject from "./components/NewProject";
import Users from "./components/Users";
import UserDetail from "./components/UserDetail";
import { AuthProvider } from "./components/auth";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
function App() {
  return (
    <AuthProvider className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/success" element={<Success />} />
        <Route path="/Project" element={<Project />}>
          <Route path="featured" element={<FeaturedProjects />} />
          <Route path="new" element={<NewProject />} />
        </Route>
        <Route
          path="/users"
          element={
            <PrivateRoute>
              <Users />
            </PrivateRoute>
          }
        />
        <Route path="/users/:userId" element={<UserDetail />} />
        <Route path="/login" element={<Login />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
