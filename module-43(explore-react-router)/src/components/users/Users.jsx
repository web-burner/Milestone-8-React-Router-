import { useLoaderData } from "react-router";
const Users = () => {
  const users = useLoaderData();
  console.log(users);
  return (
    <div>
      <h1>Hello from Users</h1>
    </div>
  );
};

export default Users;
