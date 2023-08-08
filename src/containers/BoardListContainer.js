import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BoardList from "../components/BoardList";
import { listBoardThunk } from "../modules/board";

// 목록조회 컨테이너 컴포넌트
const BoardListContainer = () => {
  //스토어 dispatch 사용가능
  const dispatch = useDispatch();

  //스토오 상태 조회
  const { boards, isLoading } = useSelector(({ board, loading }) => ({
    boards: board.boards,
    isLoading: loading.FETCH_LIST,
  }));

  //마운트될 때 게시글 목록을 가져옴
  useEffect(() => {
    dispatch(listBoardThunk());
  }, [dispatch]);

  return <BoardList boards={boards} isLoading={isLoading} />;
};

export default BoardListContainer;
