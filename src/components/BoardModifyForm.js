import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function BoardModifyForm({ board, isLoading, onModify }) {
  //컴포넌트 상태 정의
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  //상태값 변경
  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleChangeContent = (e) => {
    setContent(e.target.value);
  };

  //폼 submit 이벤트 처리
  const handleSubmit = (e) => {
    e.preventDefault();

    onModify(board.boardNo, title, content);
  };

  //마운트 될 때 기존의 제목, 내용을 가져움
  useEffect(() => {
    if (board) {
      setTitle(board.title);
      setContent(board.content);
    }
  }, [board]);

  return (
    <div align="center">
      <h2>게시판 수정</h2>
      {/* '로딩중...' 표시 */}
      {isLoading && "로딩중..."}
      {/* 수정 화면 표시 */}
      {!isLoading && board && (
        <>
          {/* submit 이벤트 처리하는 함수 지정 */}
          <form onSubmit={handleSubmit}>
            <table>
              <tbody>
                <tr>
                  <td>번호</td>
                  <td>
                    {/* 게시글번호 표시 */}
                    <input value={board.boardNo} type="text" disabled />
                  </td>
                </tr>
                <tr>
                  <td>등록일시</td>
                  <td>
                    {/* 등록일자 표시 */}
                    <input value={board.regDate} type="text" disabled />
                  </td>
                </tr>
                <tr>
                  <td>제목</td>
                  <td>
                    {/* 제목 변경 이벤트 처리하는 함수 지정 */}
                    <input
                      type="text"
                      value={title}
                      onChange={handleChangeTitle}
                    />
                  </td>
                </tr>
                <tr>
                  <td>작성자</td>
                  <td>
                    {/* 작성자 표시 */}
                    <input type="text" value={board.writer} disabled />
                  </td>
                </tr>
                <tr>
                  <td>내용</td>
                  <td>
                    {/* 내용 변경 이벤트 처리하는 함수 지정 */}
                    <textarea
                      value={content}
                      rows="5"
                      onChange={handleChangeContent}
                    ></textarea>
                  </td>
                </tr>
              </tbody>
            </table>

            <div>
              <button type="submit">수정</button>
              {/* 상세보기 화면으로 이동 */}
              <Link to={`/read/${board.boardNo}`}>취소</Link>
            </div>
          </form>
        </>
      )}
    </div>
  );
}
export default BoardModifyForm;
