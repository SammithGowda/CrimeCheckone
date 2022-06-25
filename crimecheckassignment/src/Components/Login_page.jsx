import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import axios from "axios";
export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const naviget = useNavigate();

  const handlesubmit = () => {
    let data = {
      username: username,
      password: password,
    };
    axios
      .post(`https://samcrime.herokuapp.com/login`, data)
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data.user);
          // window.location.href = "/notice-bord-page";
          naviget("/notice-bord-page/parametr-data", {
            state: { state: response.data.user },
          });
        }
      })
      .catch((er) => alert(er.response.data.message));
  };

  return (
    <>
      <div className="login_main_div">
        <h3 className="loginh3">Login</h3>
        <label>Enter UserName</label>
        <br />
        <input
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="Enter UserName"
        />
        <br />
        <label>Enter Password</label>
        <br />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="text"
          placeholder="Enter Password"
        />
        <br />
        <button onClick={handlesubmit} className="Loinbutton">
          Login
        </button>
      </div>
    </>
  );
};
