import { useInputField } from "./Hooks";

const HookForm = () => {
  const [name, handleName] = useInputField("");
  const [email, handleEmail] = useInputField("");
  const [password, handlePassword] = useInputField("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked", name,email,password);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          defaultValue={name}
          onChange={handleName}
          name="name"
          id=""
          placeholder="Name"
        />
        <br />
        <input type="email" onChange={handleEmail} name="email" id="" placeholder="Email" />
        <br />
        <input type="password" onChange={handlePassword} name="password" id="" placeholder="Password" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default HookForm;
