import React, { useContext, useState, useEffect } from "react";
import api from "../../services/api";

import AuthContext from "../../contexts/auth";
import { MdExitToApp, MdQuestionAnswer } from "react-icons/md";

import {
  Container,
  Header,
  BtnSignOut,
  BtnShowReplies,
  BtnShowQuestions,
  Content,
  Replies,
  Questions,
  Scroll,
  Reply,
  Question,
  BtnReply,
} from "./styles";

interface IQuestion {
  id: number;
  body: string;
  reply: string;
}

const Dashboard: React.FC = () => {
  const { user, signOut } = useContext(AuthContext);
  const [showReplies, setShowReply] = useState(true);
  const [showQuestions, setShowQuestions] = useState(false);
  const [listReplies, setListReplies] = useState<IQuestion[]>([]);
  const [listQuestions, setListQuestions] = useState<IQuestion[]>([]);

  useEffect(() => {
    async function buscaReplies() {
      const response = await api.get<IQuestion[]>(
        `/questions/public/${user?.id}`
      );

      setListReplies(response.data);
    }

    async function buscaQuestions() {
      const response = await api.get<IQuestion[]>(`/questions/${user?.id}`);

      setListQuestions(response.data);
    }

    buscaReplies();
    buscaQuestions();
  }, [user]);

  return (
    <Container>
      <Header>
        <div>
          <img
            src={
              user?.avatarUrl ||
              "https://api.adorable.io/avatars/50/abott@adorable.png"
            }
            alt=""
          />
          <strong>{user?.name}</strong>
        </div>
        <BtnSignOut type="button" onClick={signOut}>
          <strong>SIGN OUT</strong>
          <MdExitToApp size={32} color="#EE6352" />
        </BtnSignOut>
      </Header>
      <Content>
        <div>
          <BtnShowReplies
            active={showReplies}
            onClick={() => {
              if (!showReplies) {
                setShowReply(!showReplies);
                setShowQuestions(!showQuestions);
              }
            }}
          >
            Replies
          </BtnShowReplies>
          <BtnShowQuestions
            active={showQuestions}
            onClick={() => {
              if (!showQuestions) {
                setShowReply(!showReplies);
                setShowQuestions(!showQuestions);
              }
            }}
          >
            Questions
          </BtnShowQuestions>
        </div>
        <div>
          <Replies active={showReplies}>
            <Scroll>
              {listReplies.map((reply) => (
                <Reply key={reply.id.toString()}>
                  <strong>{reply.body}</strong>
                  <p>{reply.reply}</p>
                </Reply>
              ))}
            </Scroll>
          </Replies>
          <Questions active={showQuestions}>
            <Scroll>
              {listQuestions.map((question) => (
                <Question key={question.id.toString()}>
                  <strong>{question.body}</strong>

                  <BtnReply to={{ pathname: "/toreply", state: { question } }}>
                    <strong>to reply</strong>
                    <MdQuestionAnswer size={24} color="#344055" />
                  </BtnReply>
                  <p>{question.reply}</p>
                </Question>
              ))}
            </Scroll>
          </Questions>
        </div>
      </Content>
    </Container>
  );
};

export default Dashboard;
