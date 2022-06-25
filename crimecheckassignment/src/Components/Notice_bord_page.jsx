import { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
export const NoticeBordPage = () => {
  const { state } = useLocation().state;
  const user_id = state._id;
  const [text, setText] = useState("");
  const handleadd = () => {
    let data = {
      notice: text,
      user_id: user_id,
    };
    axios
      .post(`http://localhost:4002/notice_bord_page`, data)
      .then((res) => console.log(res));
    // console.log(data);
  };
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
      </div>
    </>
  );
};
