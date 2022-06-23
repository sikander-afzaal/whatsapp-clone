import "./App.css";
import Chat from "./Chat/Chat";
import Sidebar from "./Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <div className="app-cont">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
