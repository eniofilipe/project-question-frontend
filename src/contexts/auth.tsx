import React, { createContext, useState } from "react";
import api from "../services/api";
import history from "../services/history";
import { toast, ToastContainer } from "react-toastify";

interface IAuthContext {
  signed: boolean;
  user: IUser | null;
  signIn(): Promise<void>;
  signOut(): void;
  email: string;
  password: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
}

interface IUser {
  id: number;
  name: string;
  email: string;
  avatarUrl?: string;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider: React.FC = ({ children }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState<IUser | null>(
    localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user") || "")
      : null
  );

  async function signIn() {
    try {
      const response = await api.post("/", {
        email,
        password,
      });

      setUser(response.data.user);

      localStorage.setItem("user", JSON.stringify(response.data.user));
      localStorage.setItem("token", response.data.token);

      history.push("/dashboard");
      setEmail("");
      setPassword("");
    } catch (error) {
      toast.error("Login fail, review your entries. !", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }

  function signOut() {
    setUser(null);
    localStorage.clear();
    history.push("/");
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        signIn,
        signOut,
        setEmail,
        setPassword,
        password,
        email,
      }}
    >
      <ToastContainer />
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
