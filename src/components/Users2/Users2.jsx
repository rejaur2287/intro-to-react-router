import React, { use } from "react";

const Users2 = ({ usersPromise }) => {
  const users = use(usersPromise);
  console.log("User2 suspense dataload", users);

  return (
    <div>
      <h3>All users2</h3>
    </div>
  );
};

export default Users2;
