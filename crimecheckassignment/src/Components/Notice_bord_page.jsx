import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
export const NoticeBordPage = () => {
  const { state } = useLocation().state;
  const username = state.name;
  const [text, setText] = useState("");
  const [notice_data, setNotice_data] = useState([]);
  const handleadd = () => {
    let data = {
      notice: text,
      username: username,
    };
    axios
      .post(`https://samcrime.herokuapp.com/notice_bord_page`, data)
      .then((res) => alert("Submited"), setText(""));
    // console.log(data);
  };
  useEffect(() => {
    axios
      .get(`https://samcrime.herokuapp.com/notice_bord_page`)
      .then((res) => setNotice_data(res.data));
  }, [notice_data]);

  return (
    <>
      <div className="notice_bord_main_div">
        <div className="notice_header_div">
          <p>Wellcome to the Notice bord page</p>
        </div>
        <div className="notice_textarea_div">
          <textarea
            className="textarea_tag"
            value={text}
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
        <p className="table_text_tag">All Notice's</p>
        <div className="notice_view_div">
          <table className="root_table" style={{ width: "100%" }}>
            <thead>
              <tr className="table_header_row_text">
                <td style={{ width: "400px" }}>NOTICE</td>
                <td>USER NAME</td>
                <td>CREATED DATE</td>
              </tr>
            </thead>
            <tbody>
              {notice_data.map((e) => (
                <tr className="table_row_text" key={e._id}>
                  <td>{e.notice}</td>
                  <td>{e.username}</td>
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
