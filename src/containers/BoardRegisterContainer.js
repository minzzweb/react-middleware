import React from "react";
import BoardRegisterForm from "../components/BoardRegisterForm";
import { registerBoardApi } from "../lib/api";
import { useNavigate } from "react-router-dom";

const BoardRegisterContainer = ({ history }) => {
  const navigate = useNavigate();
  const onRegister = async (title, content, writer) => {
    try {
      const response = await registerBoardApi(title, content, writer);

      alert("등록되었습니다.");

      navigate("/read/" + response.data.boardNo);
    } catch (e) {
      console.log(e);
    }
  };

  return <BoardRegisterForm onRegister={onRegister} />;
};

export default BoardRegisterContainer;
