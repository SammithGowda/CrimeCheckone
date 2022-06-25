import { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
export const Register = () => {
  const [register_data, setRegister_data] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });
  const handledata = (e) => {
    const { id, value } = e.target;
    setRegister_data((pre) => ({ ...pre, [id]: value }));
    // console.log(register_data);
  };

  const handle = (event) => {
    event.preventDefault();
    axios
      .post(`https://samcrime.herokuapp.com/register`, register_data)
      .then((response) => {
        if (response.status === 200) {
          window.location.href = "/";
        }
      })
      .catch((er) => alert(er.response.data.message));
  };

  return (
    <>
      <h1 className="registerh3">Register</h1>
      <div className="registerdiv">
        <form className="registerform" onSubmit={handle} action="">
          <label>Enter Name</label>
          <br />
          <input
            value={register_data.name}
            onChange={handledata}
            id="name"
            type="text"
            placeholder="Enter Name"
          />
          <br />
          <label>Enter Username</label>
          <br />
          <input
            value={register_data.username}
            onChange={handledata}
            id="username"
            type="text"
            placeholder="Enter UserName"
          />
          <br />
          <label>Enter Email ID</label>
          <br />
          <input
            value={register_data.email}
            onChange={handledata}
            id="email"
            type="text"
            placeholder="Enter Email ID"
          />
          <br />
          <label>Enter Password</label>
          <br />
          <input
            value={register_data.password}
            onChange={handledata}
            id="password"
            type="text"
            placeholder="Enter Password"
          />
          <br />
          <input
            style={{ width: "20%" }}
            className="submit_input"
            type="submit"
            value={"Submit"}
          />
        </form>
      </div>
    </>
  );
};
