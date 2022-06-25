import "../App.css";
export const Login = () => {
  return (
    <>
      <div className="login_main_div">
        <h3 className="loginh3">Login</h3>
        <label>Enter UserName</label>
        <br />
        <input type="text" placeholder="Enter UserName" />
        <br />
        <label>Enter Password</label>
        <br />
        <input type="text" placeholder="Enter Password" />
        <br />
        <button className="Loinbutton">Login</button>
      </div>
    </>
  );
};
