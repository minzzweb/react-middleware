//지연 처리 모듈 분리

import { createAction, handleActions } from "redux-actions";

//초기화
const initialState = {};

//액션 타입
const START_LOADING = "loading/START_LOADING";
const END_LOADING = "loading/END_LOADING";

//액션 함수
export const startLoading = createAction(
  START_LOADING,
  (actionType) => actionType
);

export const endLoading = createAction(END_LOADING, (actionType) => actionType);

//리듀서
const loading = handleActions(
  {
    [START_LOADING]: (state, action) => ({
      ...state,
      [action.payload]: true,
    }),
    [END_LOADING]: (state, action) => ({
      ...state,
      [action.payload]: false,
    }),
  },
  initialState
);
export default loading;
