import React, { useEffect, useState } from "react";
import { Avatar } from "@material-ui/core";
import "./Chat.css";
import { AttachFile, InsertEmoticon, Mic, MoreVert } from "@mui/icons-material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { IconButton } from "@mui/material";
import { useParams } from "react-router-dom";
import db from "../firebase";
function Chat() {
  const { roomId } = useParams();
  const [seed, setSeed] = useState("lol");
  const [input, setInput] = useState("");
  const [roomName, setRoomName] = useState("");

  const sendMessage = (e) => {
    // for the text input (messages that we type)
    e.preventDefault();
  };
  //fetching data from db using the id in the url which is passed through the sidebar component
  useEffect(() => {
    if (roomId) {
      db.collection("Rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomName(snapshot.data().name));
      setSeed(Math.floor(Math.random() * 10000));
    }
  }, [roomId]);

  return (
    <div className="chat">
      <div className="chat__top">
        <Avatar src={`https://avatars.dicebear.com/api/male/${seed}.svg`} />
        <div className="chat-info">
          <h3>{roomName}</h3>
          <p>last seen at</p>
        </div>
        <div className="icon-cont">
          <IconButton>
            <SearchOutlinedIcon />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat__mid">
        <p className={`chat-message ${true ? "chat-reciever" : ""}`}>
          <span className="name-chat">Sikander Afzaal</span> Hey Guys
          <span className="chat-time">3:27</span>
        </p>
        <p className={`chat-message ${false ? "chat-reciever" : ""}`}>
          <span className="name-chat">Sikander Afzaal</span> Hey Guys
          <span className="chat-time">3:27</span>
        </p>
        <p className={`chat-message ${true ? "chat-reciever" : ""}`}>
          <span className="name-chat">Sikander Afzaal</span> Hey Guys
          <span className="chat-time">3:27</span>
        </p>
      </div>
      <div className="chat__bottom">
        <IconButton>
          <InsertEmoticon />
        </IconButton>
        <form action="#">
          <input
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
            type="text"
            placeholder="Type a message"
          />
          <button onClick={sendMessage} type="submit">
            Submit
          </button>
        </form>
        <IconButton>
          <Mic />
        </IconButton>
      </div>
    </div>
  );
}

export default Chat;
