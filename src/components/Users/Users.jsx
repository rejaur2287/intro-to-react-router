import React from "react";
import { useLoaderData } from "react-router";

const Users = () => {
  const users = useLoaderData();
  console.log(users);

  return (
    <div>
      <h3>Users will be loaded...</h3>
    </div>
  );
};

export default Users;
