import { useState } from "react";

const Login = (props) => {
  const {login} = props;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeUsername = (event) => {
      console.log(event.target.value);
      setUsername(event.target.value);
    };
    
    const handleChangePassword = (event) => {
      console.log(event.target.value);
      setPassword(event.target.value);
  }

  const handleSubmitBtn = () => {
      if(username === "admin@example.com" && password === "12345678"){
          login(true);
      }else{
          alert("username password salah")
      }
  }

  return (
    <div className="background-login">
      <div className="container-fluid">
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              name="username"
              aria-describedby="emailHelp"
              onChange={handleChangeUsername}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              id="exampleInputPassword1"
              onChange={handleChangePassword}
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-primary" onClick={() => handleSubmitBtn()}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
