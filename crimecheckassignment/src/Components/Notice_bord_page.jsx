import { useLocation, useParams } from "react-router-dom";
export const NoticeBordPage = () => {
  const { state } = useLocation().state;
  console.log(state._id);
  return (
    <>
      <h1>NOTICE BORD PAGE</h1>
    </>
  );
};
