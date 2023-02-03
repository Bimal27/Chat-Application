import React from "react";
import { ChatEngine } from "react-chat-engine";
import "./App.css";
import Login from "./LoginForm";

const projectID = "75c73eb0-0f50-4536-bb4f-896082b1a58f";

function App() {
  if (!localStorage.getItem("username")) return <Login />;
  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
    />
  );
}

export default App;
