import React, { useState, useEffect } from "react";
import { RouteComponentProps, Link } from "react-router-dom";
import history from "../../services/history";
import api from "../../services/api";

import { MdReply, MdSearch } from "react-icons/md";
import { Container, InputSearch, UsersList, Scroll, User } from "./styles";

interface IUser {
  id: Number;
  name: string;
  url?: string;
}

interface IState {
  search: string;
}

interface ILocation extends Location {
  state: IState;
}

interface IRouteProps extends RouteComponentProps {
  location: ILocation;
}

const SearchProfile: React.FC<IRouteProps> = ({ location }) => {
  const [search, setSearch] = useState<string>(location.state.search);
  const [usersList, setUsersList] = useState<IUser[]>([]);

  useEffect(() => {
    async function buscaUsers() {
      const response = await api.get<IUser[]>(`/users/${search}`);

      setUsersList(response.data);
    }

    buscaUsers();
  }, [search]);

  function backToHome() {
    history.goBack();
  }

  return (
    <Container>
      <button type="button" onClick={backToHome}>
        <MdReply size={32} color="#EE6352" />
      </button>
      <InputSearch>
        <MdSearch size={32} color="#344055" />
        <input
          placeholder="... search users"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        ></input>
      </InputSearch>
      <UsersList>
        <Scroll>
          {usersList.map((user) => (
            <User key={user.id.toString()}>
              <div>
                <img
                  src={
                    user.url ||
                    "https://api.adorable.io/avatars/50/abott@adorable.png"
                  }
                  alt=""
                />
                <strong>{user.name}</strong>
              </div>

              <Link
                to={{
                  pathname: "/toask",
                  state: {
                    user: user.id,
                    name: user.name,
                    avatarUrl: user.url,
                  },
                }}
              >
                TO ASK
              </Link>
            </User>
          ))}
        </Scroll>
      </UsersList>
    </Container>
  );
};

export default SearchProfile;
