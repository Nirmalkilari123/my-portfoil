import React from "react";
import UserData from "./UserData";
import { Link } from "react-router-dom";
function Users() {
  return (
    <div>
      <h1>Users</h1>
      <div className="card-container">
        {UserData.map((eachUser) => {
          const { id, name, email } = eachUser;
          return (
            <Link to={`/users/${id}`} key={id}>
              <article className="card">
                <h2>{name}</h2>

                <h2>{email}</h2>
              </article>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Users;
