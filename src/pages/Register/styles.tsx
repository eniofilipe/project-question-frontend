import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  > button {
    border: none;
    background: none;
    width: 32px;
  }
  form {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    > input {
      padding: 5px;
      height: 6vh;
      width: 300px;
      margin-bottom: 10px;
    }
    > button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 300px;
      height: 6vh;
      background: #ee6352;
      border: solid 1px #363636;
      color: #eef4ed;
    }
  }
`;
