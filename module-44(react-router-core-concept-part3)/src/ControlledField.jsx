import { useState } from "react";
import '../src/App.css'
const ControlledField = () => {
  const [pass, setPass] = useState('');
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
    
  };
  const onChangeHandler = (e) => {
    setPass(e.target.value);
    if (pass.length < 6) {
      return (
        setError('Password must be 6 character or more')
      );
    } else {
      return setError("");
    }
    // console.log(pass);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" /> <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={onChangeHandler}
          defaultValue={pass}
          required
        />{" "}
        <br />
        <input type="submit" value="Submit" />
      </form>
      <p className=" text-red-600">{error}</p>
    </div>
  );
};

export default ControlledField;
