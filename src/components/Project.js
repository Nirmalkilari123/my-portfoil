import React from "react";
import { Link, Outlet } from "react-router-dom";
function Project() {
  return (
    <div>
      <h1>Projects</h1>
      <nav>
        <Link to="/project/featured">FeaturedProjects</Link>
        <Link to="/project/new">NewProjects</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default Project;
