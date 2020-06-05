import styled from "styled-components";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

export const Container = styled.div`
  padding: 2vh;
  display: flex;
  flex-direction: column;
  > button {
    border: none;
    background: none;
    width: 32px;
  }
`;

export const InputSearch = styled.div`
  display: flex;
  background: #eef4ed;
  height: 9vh;
  padding: 1vh;
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

export const UsersList = styled.div`
  margin-top: 3vh;
  height: 50vh;
`;

export const Scroll = styled(PerfectScrollbar)``;

export const User = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: solid #eef4ed 1px;
  padding: 0.5vh;
  > div {
    display: flex;
    align-items: center;
    > img {
      height: 9vh;
      width: 9vh;
      border-radius: 50%;
      margin-right: 10px;
    }
    > strong {
      color: #344055;
    }
  }
  > a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 9vh;
    background: #ee6352;
    border: solid 1px #363636;
    color: #eef4ed;
  }
`;
