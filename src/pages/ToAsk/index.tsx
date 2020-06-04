import React, { useState, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import history from "../../services/history";
import api from "../../services/api";

import { MdReply, MdWhatshot, MdNearMe } from "react-icons/md";
import {
  Container,
  InputSearch,
  BtnSend,
  BtnBack,
  QuestionList,
  Scroll,
  Question,
  Header,
} from "./styles";

interface IState {
  user: number;
  name: string;
  avatarUrl?: string;
}

interface ILocation extends Location {
  state: IState;
}

interface IRouteProps extends RouteComponentProps {
  location: ILocation;
}

interface IQuestion {
  id: number;
  body: string;
  reply: string;
}

const ToAsk: React.FC<IRouteProps> = ({ location }) => {
  const [user, setUser] = useState(location.state);
  const [question, setQuestion] = useState("");
  const [listQuestion, setListQuestion] = useState<IQuestion[]>([]);

  useEffect(() => {
    async function buscaUsers() {
      const response = await api.get<IQuestion[]>(
        `/questions/public/${user.user}`
      );

      setListQuestion(response.data);
    }

    buscaUsers();
  }, [user.user]);

  async function askQuestion() {
    const response = await api.post("/questions", {
      authorId: user.user,
      body: question,
    });

    setQuestion("");
    console.log(response.data);
  }

  function backToSearch() {
    history.goBack();
  }

  return (
    <Container>
      <Header>
        <BtnBack type="button" onClick={backToSearch}>
          <MdReply size={32} color="#EE6352" />
        </BtnBack>
        <div>
          <strong>{user.name}</strong>
          <img
            src={
              user.avatarUrl ||
              "https://api.adorable.io/avatars/50/abott@adorable.png"
            }
            alt=""
          />
        </div>
      </Header>
      <InputSearch>
        <MdWhatshot size={32} color="#344055" />
        <input
          placeholder={`What do you want to ask ${user.name}`}
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        ></input>
        <BtnSend type="button" onClick={() => askQuestion()}>
          <MdNearMe size={32} />
        </BtnSend>
      </InputSearch>
      <QuestionList>
        <Scroll>
          {listQuestion.map((question) => (
            <Question key={question.id.toString()}>
              <strong>{question.body}</strong>
              <p>{question.reply}</p>
            </Question>
          ))}
        </Scroll>
      </QuestionList>
    </Container>
  );
};

export default ToAsk;
