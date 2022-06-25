import { useState } from "react";

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
    console.log(register_data);
  };

  return (
    <>
      <div>
        <form onSubmit={handle} action="">
          <input
            onChange={handledata}
            id="name"
            type="text"
            placeholder="Enter Name"
          />
          <br />
          <input
            onChange={handledata}
            id="username"
            type="text"
            placeholder="Enter UserName"
          />
          <br />
          <input
            onChange={handledata}
            id="email"
            type="text"
            placeholder="Enter Email ID"
          />
          <br />
          <input
            onChange={handledata}
            id="password"
            type="text"
            placeholder="Enter Password"
          />
          <br />
          <input type="submit" value={"Submit & Place Order"} />
        </form>
      </div>
    </>
  );
};
