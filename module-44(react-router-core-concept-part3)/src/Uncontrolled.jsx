import { useRef } from "react";

const Uncontrolled = () => {

    const emailRef = useRef('')
    const passwordRef = useRef('')
    const handleSubmit = e => {
        e.preventDefault()
        console.log(emailRef.current.value)
        console.log(passwordRef.current.value)
    }

    return (
        <form onClick={handleSubmit}>
            <input type="email" ref={emailRef} name="email" placeholder="Email" />
            <br />
            <input type="password" ref={passwordRef} name="password" placeholder="Password" />
            <br />
            <input type="submit" value="Submit" />
        </form>
    );
};

export default Uncontrolled;