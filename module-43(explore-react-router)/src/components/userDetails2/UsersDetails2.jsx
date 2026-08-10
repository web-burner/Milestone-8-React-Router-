import { useState } from "react";
import { use } from "react";
import { Navigate , useLocation } from "react-router";
const UsersDetails2 = ({ userPromise }) => {
  const user = use(userPromise);
  const { name } = user;
  console.log(name);
  const [visitHome, setVisitHome] = useState(false);
  const location = useLocation()
  console.log(location)
  if (visitHome) {
    return <Navigate to={"/"}></Navigate>;
  }
  return (
    <div>
      <h2>UserName: {name}</h2>
      <button className=" btn" onClick={() => setVisitHome(true)}>Visit Home</button>
    </div>
  );
};

export default UsersDetails2;
