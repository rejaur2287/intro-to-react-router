import React from "react";
import { useLoaderData, useParams } from "react-router";

const UserDetails = () => {
  const user = useLoaderData();
  const { name, website } = user;
  const { userId } = useParams();
  console.log(userId);

  // const params = useParams();
  // console.log(params.userId);

  return (
    <div>
      <h3>single user details...</h3>
      <h4>Name: {name}</h4>
      <p>Website:{website}</p>
    </div>
  );
};

export default UserDetails;
