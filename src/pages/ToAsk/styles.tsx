import styled from "styled-components";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

export const Container = styled.div`
  padding: 2vh;
  display: flex;
  flex-direction: column;
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
      margin-right: 10px;
    }
  }
`;

export const InputSearch = styled.div`
  margin-top: 1vh;
  display: flex;
  background: #eef4ed;
  height: 9vh;
  padding: 1vh 0 1vh 1vh;
  align-items: center;
  > svg {
    opacity: 60%;
  }
  > input {
    background: none;
    border: none;
    width: 100%;
    text-align: end;
    font-size: 20px;
  }
`;

export const BtnBack = styled.button`
  border: none;
  background: none;
  width: 32px;
`;

export const BtnSend = styled.button`
  width: 6vw;
  height: 9vh;
  padding: 0.5vw;
  margin-left: 2vh;
  background: #344055;
  border: none;
  color: #eef4ed;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const QuestionList = styled.div`
  margin-top: 3vh;
  height: 50vh;
`;
export const Scroll = styled(PerfectScrollbar)``;
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
