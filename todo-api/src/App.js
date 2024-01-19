import { useState } from "react";
import LoginView from "./components/views/LoginView";
import TodoView from "./components/views/TodoView";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { Container } from "@mui/material";

import Cookies from "js-cookie";

const defaultToken = Cookies.get("_todo_token");

function App() {
  const [token, setToken] = useState(defaultToken);

  return (
    <div>
      <CssBaseline enableColorScheme />
      <Container maxWidth="sm">
        {token ? (
          <TodoView
            token={token}
            onLogaut={() => {
              Cookies.remove("_todo_token");
              setToken();
            }}
          />
        ) : (
          <LoginView
            onLogin={(token) => {
              Cookies.set("_todo_token", token);
              setToken(token);
            }}
          />
        )}
      </Container>
    </div>
  );
}

export default App;
