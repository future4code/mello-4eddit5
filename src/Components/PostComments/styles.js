import styled from "styled-components";

export const Comment = styled.div`
  width: 35vw;
  height: 30vh;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 30px 0;
`;

export const CommentAuthorContainer = styled.div`
  border-bottom: 1px solid black;
  width: 35vw;
  display: flex;
  justify-content: center;
  border-radius: 5px;
`;

export const CommentFooter = styled.div`
  border-top: 1px solid black;
  width: 35vw;
  display: flex;
  border-radius: 5px;
`;

export const CommentTextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
