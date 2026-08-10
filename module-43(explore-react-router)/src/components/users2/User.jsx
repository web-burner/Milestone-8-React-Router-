import { Suspense } from "react";
import { useState } from "react";
import { Link } from "react-router";
import UserDetails2 from "../userDetails2/UsersDetails2";
const User = ({ user }) => {
  const { id, name, email, phone } = user;
  const userPromise = fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`,
  ).then((res) => res.json());
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div className=" border rounded-2xl p-5">
      <h2>{name}</h2>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <Link to={`/user/${id}`}>Show Details</Link>
      <button className="btn" onClick={() => setShowInfo(!showInfo)}>
        {showInfo ? "Hide" : "Show"} Info
      </button>
      {showInfo && (
        <Suspense fallback={<p>Loading...</p>}>
          <UserDetails2 userPromise={userPromise}></UserDetails2>
        </Suspense>
      )}
    </div>
  );
};

export default User;
