import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BoardRead from "../components/BoardRead";
import { readBoardThunk } from "../modules/board";
import { removeBoardApi } from "../lib/api";
import { useNavigate, useParams } from "react-router-dom";

const BoardReadContainer = () => {
  const { boardNo } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { board, isLoading } = useSelector(({ board, loading }) => ({
    board: board.board,
    isLoading: loading.FETCH,
  }));

  const onRemove = async () => {
    try {
      await removeBoardApi(boardNo);

      alert("삭제되었습니다.");

      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    dispatch(readBoardThunk(boardNo));
  }, [dispatch, boardNo]);

  return (
    <BoardRead
      boardNo={boardNo}
      board={board}
      isLoading={isLoading}
      onRemove={onRemove}
    />
  );
};

export default BoardReadContainer;
