// import { useState } from "react";
import LoginView from "./components/views/LoginView"
import TodoView from "./components/views/TodoView";

import { CssBaseline } from "@mui/material";
import { Container } from "@mui/material";

function App() {
  // const [user, setUser] = useState(null);

  return (
    <div className="App">
      <CssBaseline />
      <Container maxWidth="sm">{true ? <TodoView /> : <LoginView />}</Container>
    </div>
  );
}

export default App;
