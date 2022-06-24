import React, { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import Chat from "./Chat/Chat";
import Login from "./Login/Login";
import useStateValue from "./Context/authContext";
function App() {
  const [{ user }] = useStateValue();
  return (
    <div className="App">
      {!user ? (
        <Login />
      ) : (
        <div className="app-cont">
          <Sidebar />
          <Routes>
            <Route element={<Chat />} path="/" />
            <Route element={<Chat />} path="/rooms/:roomId" />
          </Routes>
        </div>
      )}
    </div>
  );
}

export default App;
