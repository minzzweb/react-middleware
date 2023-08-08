import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BoardModifyForm from "../components/BoardModifyForm";
import { modifyBoardApi } from "../lib/api";
import { readBoardThunk } from "../modules/board";
import { useNavigate, useParams } from "react-router-dom";

const BoardModifyContainer = ({ match, history }) => {
  const navigate = useNavigate();
  const { boardNo } = useParams();

  const dispatch = useDispatch();

  const { board, isLoading } = useSelector(({ board, loading }) => ({
    board: board.board,
    isLoading: loading.FETCH,
  }));

  const onModify = async (boardNo, title, content) => {
    try {
      await modifyBoardApi(boardNo, title, content);

      alert("수정되었습니다.");

      navigate("/read/" + boardNo);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    dispatch(readBoardThunk(boardNo));
  }, [dispatch, boardNo]);

  return (
    <BoardModifyForm board={board} isLoading={isLoading} onModify={onModify} />
  );
};

export default BoardModifyContainer;
