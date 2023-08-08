//루트 리듀서 정의
//combineReducers 함수
import { combineReducers } from "redux";
// board 모듈 임포트
import board from "./board";
// loading 모듈 임포트
import loading from "./loading";

//루트 리듀서
const rootReducer = combineReducers({
  board,
  loading,
});

export default rootReducer;
