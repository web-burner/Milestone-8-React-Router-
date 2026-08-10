import { useLoaderData , useNavigate, useParams} from "react-router";
const UserDetails = () => {
  const data = useLoaderData();
  console.log(data);
  const { name, email, phone } = data;
    const navigate = useNavigate()

    const params = useParams()
    console.log(params)
  return (
    <div>
      <h2>Name: {name}</h2>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <button onClick={()=> navigate(-1)}>Go Back</button>
    </div>
  );
};

export default UserDetails;
