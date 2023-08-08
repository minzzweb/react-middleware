import { createAction, handleActions } from "redux-actions";
import { fetchBoardApi, fetchBoardListApi } from "../lib/api";
import { startLoading, endLoading } from "./loading";

const FETCH_SUCCESS = "board/FETCH_SUCCESS";
const FETCH_FAILURE = "board/FETCH_FAILURE";

const FETCH_LIST_SUCCESS = "board/FETCH_LIST_SUCCESS";
const FETCH_LIST_FAILURE = "board/FETCH_LIST_FAILURE";

export const fetchSuccess = createAction(FETCH_SUCCESS, (data) => data);
export const fetchFailure = createAction(FETCH_FAILURE, (e) => e);

export const fetchListSuccess = createAction(
  FETCH_LIST_SUCCESS,
  (data) => data
);
export const fetchListFailure = createAction(FETCH_LIST_FAILURE, (e) => e);

export const readBoardThunk = (boardNo) => async (dispatch) => {
  dispatch(startLoading("FETCH"));
  try {
    const response = await fetchBoardApi(boardNo);
    dispatch(fetchSuccess(response.data));
    dispatch(endLoading("FETCH"));
  } catch (e) {
    dispatch(fetchFailure(e));
    dispatch(endLoading("FETCH"));
    throw e;
  }
};

export const listBoardThunk = () => async (dispatch) => {
  dispatch(startLoading("FETCH"));
  try {
    const response = await fetchBoardListApi();

    dispatch(fetchListSuccess(response.data));
    dispatch(endLoading("FETCH"));
  } catch (e) {
    dispatch(fetchListFailure(e));
    dispatch(endLoading("FETCH"));
    throw e;
  }
};

const initialState = {
  board: null,
  boards: [],
  error: null,
};

//리듀서 함수 정의
const board = handleActions(
  {
    [FETCH_SUCCESS]: (state, action) => ({
      ...state,
      board: action.payload,
    }),
    [FETCH_FAILURE]: (state) => ({
      ...state,
    }),
    //목록 조회 리듀서 함수 정의
    [FETCH_LIST_SUCCESS]: (state, action) => ({
      ...state,
      boards: action.payload,
    }),
    [FETCH_LIST_FAILURE]: (state, action) => ({
      ...state,
      error: action.payload,
    }),
  },
  initialState
); //initialState은 초기상태

export default board;
