import React from "react";
import { Router } from "react-router-dom";

import History from "./services/history";
import { AuthProvider } from "./contexts/auth";
import GlobalStyle from "./styles/global";

import Routes from "./routes";

const App: React.FC = () => {
  return (
    <Router history={History}>
      <AuthProvider>
        <Routes />
        <GlobalStyle />
      </AuthProvider>
    </Router>
  );
};

export default App;
