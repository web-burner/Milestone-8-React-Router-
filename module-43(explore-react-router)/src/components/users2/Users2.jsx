import { use } from "react";
import User from "./User";

const Users2 = ({ usersPromise }) => {
  const users = use(usersPromise);
  console.log(users);
  return <div>
    <h1>Hello from users 2</h1>
    <div className=" grid grid-cols-3 gap-5 w-10/12 mx-auto">
        {
        users.map(user => <User key={user.id} user={user}/>)
    }
    </div>
  </div>;
};

export default Users2;
