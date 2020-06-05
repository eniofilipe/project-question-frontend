import styled from "styled-components";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2vh;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  > div {
    display: flex;
    align-items: center;
    > img {
      border-radius: 50%;
      height: 32px;
      width: 32px;
    }

    > strong {
      color: #344055;
      margin-left: 10px;
    }
  }
`;

export const BtnSignOut = styled.button`
  display: flex;
  border: none;
  background: none;
  align-items: center;

  > svg {
    width: 32px;
  }

  > strong {
    color: #344055;
    font-style: italic;
    margin-right: 10px;
  }
`;

export const Content = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: Column;

  > div {
    display: flex;
    align-items: center;
    padding: 0;
  }
`;

export const BtnShowReplies = styled.button<{ active: boolean }>`
  display: flex;
  border: none;
  background: #c4c4c4;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-style: italic;

  height: 6vh;

  opacity: ${(props) => (props.active ? 1 : 0.5)};
`;

export const BtnShowQuestions = styled.button<{ active: boolean }>`
  display: flex;
  border: none;
  background: #c4c4c4;
  align-items: center;
  justify-content: center;
  font-style: italic;
  width: 100%;

  height: 6vh;

  opacity: ${(props) => (props.active ? 1 : 0.5)};
`;

export const Scroll = styled(PerfectScrollbar)`
  width: 100%;
`;

export const Replies = styled.div<{ active: boolean }>`
  display: ${(props) => (props.active ? "flex" : "none")};
  margin-top: 3vh;
  height: 50vh;
  width: 100%;
`;

export const Questions = styled.div<{ active: boolean }>`
  display: ${(props) => (props.active ? "flex" : "none")};
  margin-top: 3vh;
  height: 50vh;
  width: 100%;
`;

export const Reply = styled.div`
  border-top: solid #eef4ed 1px;
  padding: 0.5vh;

  display: flex;
  flex-direction: column;
  justify-content: center;

  > strong {
    color: #344055;
    margin-bottom: 1vh;
  }
  > p {
    margin-left: 1vw;
    font-style: italic;
  }
`;

export const Question = styled.div`
  border-top: solid #eef4ed 1px;
  padding: 0.5vh;

  display: flex;
  flex-direction: column;
  justify-content: center;

  > strong {
    color: #344055;
    margin-bottom: 1vh;
  }
  > p {
    margin-left: 1vw;
    font-style: italic;
  }
`;

export const BtnReply = styled(Link)`
  display: flex;
  border: none;
  background: none;
  align-items: center;

  > svg {
    width: 32px;
  }

  > strong {
    color: #000;
    font-style: italic;
    margin-right: 10px;
    opacity: 0.6;
  }
`;
