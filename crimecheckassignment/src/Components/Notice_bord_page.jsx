import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
export const NoticeBordPage = () => {
  const { state } = useLocation().state;
  const user_id = state._id;
  const [text, setText] = useState("");
  const [notice_data, setNotice_data] = useState([]);
  const handleadd = () => {
    let data = {
      notice: text,
      user_id: user_id,
    };
    axios
      .post(`http://localhost:4002/notice_bord_page`, data)
      .then((res) => alert("Submited"));
    // console.log(data);
  };
  useEffect(() => {
    axios
      .get(`http://localhost:4002/notice_bord_page`)
      .then((res) => setNotice_data(res.data));
  }, []);
  return (
    <>
      <div className="notice_bord_main_div">
        <div className="notice_header_div">
          <p>Wellcome to the Notice bord page</p>
        </div>
        <div className="notice_textarea_div">
          <textarea
            className="textarea_tag"
            onChange={(e) => setText(e.target.value)}
            cols="50"
            rows="5"
            placeholder="Enter Your Notice all here !!"
          ></textarea>
          <br />
          <button className="notice_submit_button" onClick={handleadd}>
            Submit Notice
          </button>
        </div>
        <p>All Notice's</p>
        <div className="notice_view_div">
          <table className="root_table" style={{ width: "100%" }}>
            <thead>
              <tr>
                <td style={{ width: "400px" }}>NOTICE</td>
                <td>USER ID</td>
                <td>CREATED DATE</td>
              </tr>
            </thead>
            <tbody>
              {notice_data.map((e) => (
                <tr key={e._id}>
                  <td>{e.notice}</td>
                  <td>{e.user_id}</td>
                  <td>{e.createdAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
