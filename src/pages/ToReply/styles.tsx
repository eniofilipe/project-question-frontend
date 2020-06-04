import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  height: 100%;
  > button {
    border: none;
    background: none;
    width: 32px;
  }
`;

export const Reply = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: center;
  margin-bottom: 0;

  > strong {
    color: #344055;
    font-size: 2rem;
    font-style: italic;
    margin-bottom: 2vh;
  }

  > textarea {
    resize: none;
    width: 100%;
    height: 10vh;
    font-size: 1rem;
    font-family: inherit;
    padding: 2px;
    margin-bottom: 2vh;
  }

  > button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40%;
    margin-left: 60%;
    height: 9vh;
    background: #ee6352;
    border: solid 1px #363636;
    color: #eef4ed;

    > svg {
      margin-left: 10px;
    }
  }
`;
