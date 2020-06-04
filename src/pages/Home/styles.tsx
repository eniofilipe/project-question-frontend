import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;

  strong {
    font-weight: bold;
    font-size: 12px;
  }
`;

export const SearchProfile = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-right: solid 2px #344055;

  > div {
    text-align: end;
    > div {
      height: 32px;
      max-width: 270px;
      display: flex;
      margin-top: 10px;
      justify-content: flex-end;
      padding: 0;
      > input {
        width: 200px;
        margin-left: 10px;
        padding: 0;
      }
      > a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 200px;
        margin-left: 10px;
        background: #344055;
        border: solid 1px #363636;
        color: #eef4ed;
      }
    }
  }
`;

export const SignProfile = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > div {
    text-align: end;
    > div {
      height: 32px;
      max-width: 270px;
      display: flex;
      margin-top: 10px;
      justify-content: flex-end;
      padding: 0;
      > input {
        width: 200px;
        margin-left: 10px;
      }
    }
  }
`;

export const SignIn = styled.button`
  width: 200px;
  margin-left: 10px;
  background: #344055;
  border: solid 1px #363636;
  color: #eef4ed;
`;
export const SignUp = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  margin-left: 10px;
  background: #ee6352;
  border: solid 1px #363636;
  color: #eef4ed;
`;
