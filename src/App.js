import "./App.css";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import Chat from "./Chat/Chat";
function App() {
  return (
    <div className="App">
      <div className="app-cont">
        <Sidebar />
        <Routes>
          <Route element={<Chat />} path="/" />
          <Route element={<Chat />} path="/rooms/:roomId" />
        </Routes>
      </div>
    </div>
  );
}

export default App;
