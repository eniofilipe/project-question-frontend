import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../contexts/auth";
import history from "../../services/history";
import { MdSearch, MdVpnKey, MdPerson, MdPersonAdd } from "react-icons/md";
import {
  Container,
  SearchProfile,
  SignProfile,
  SignIn,
  SignUp,
} from "./styles";

const Home: React.FC = () => {
  const [search, setSearch] = useState("");
  const { signIn, setEmail, setPassword, email, password } = useContext(
    AuthContext
  );
  /* function searchProfile() {
    history.push("/search", [search]);
  } */

  return (
    <Container>
      <SearchProfile>
        <div>
          <h1>QuestionApp</h1>
          <strong>SEARCH PROFILE AND MAKE A QUESTION ...</strong>
          <div>
            <MdSearch size={32} color="#344055" />
            <input
              type="text"
              name="searchProfile"
              placeholder="search"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </div>
          <div>
            <Link to={{ pathname: "/search", state: { search } }}>SEARCH</Link>
          </div>
        </div>
      </SearchProfile>
      <SignProfile>
        <div>
          <strong>... OR SIGN IN AND REPLY</strong>
          <div>
            <MdPerson size={32} color="#344055" />
            <input
              type="email"
              name="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <MdVpnKey size={32} color="#344055" />
            <input
              type="password"
              name="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <SignIn type="button" onClick={signIn}>
              SIGN IN
            </SignIn>
          </div>
          <div>
            <MdPersonAdd size={32} color="#344055" />
            <SignUp to={{ pathname: "/register", state: { search } }}>
              SIGN UP
            </SignUp>
          </div>
        </div>
      </SignProfile>
    </Container>
  );
};

export default Home;
