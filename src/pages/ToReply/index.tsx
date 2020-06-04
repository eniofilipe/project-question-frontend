import React, { useState, useContext } from "react";
import AuthContext from "../../contexts/auth";
import { RouteComponentProps } from "react-router-dom";
import { MdReply, MdSend } from "react-icons/md";
import history from "../../services/history";
import api from "../../services/api";

import { toast } from "react-toastify";
import { Container, Reply } from "./styles";

interface IQuestion {
  id: number;
  body: string;
  reply: string;
}

interface IState {
  question: IQuestion;
}

interface ILocation extends Location {
  state: IState;
}

interface IRouteProps extends RouteComponentProps {
  location: ILocation;
}

const ToReply: React.FC<IRouteProps> = ({ location }) => {
  const { user } = useContext(AuthContext);
  const [question, setQuestion] = useState<IQuestion>(location.state.question);
  const [reply, setReply] = useState("");

  function backToDashboard() {
    history.goBack();
  }

  async function postReply() {
    try {
      const response = await api.put(`/questions/${user?.id}/${question.id}`, {
        reply,
      });

      toast.success("Reply success!", {
        onClose: () => history.push("/dashboard"),
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (err) {
      toast.error("Error! Verify your reply", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }

  return (
    <Container>
      <button type="button" onClick={backToDashboard}>
        <MdReply size={32} color="#EE6352" />
      </button>
      <Reply>
        <strong>{question.body}</strong>
        <textarea
          value={reply}
          onChange={(e) => {
            setReply(e.target.value);
          }}
        ></textarea>
        <button type="button" onClick={postReply}>
          <strong>REPLY</strong>
          <MdSend size={32} color="#eef4ed" />
        </button>
      </Reply>
    </Container>
  );
};

export default ToReply;
