import React, { useEffect, useState } from "react";
import { Avatar } from "@material-ui/core";
import "./Chat.css";
import { AttachFile, InsertEmoticon, Mic, MoreVert } from "@mui/icons-material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { IconButton } from "@mui/material";
function Chat() {
  const [seed, setSeed] = useState("lol");
  const [input, setInput] = useState("");
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 10000));
  }, []);
  const sendMessage = (e) => {
    e.preventDefault();
  };
  return (
    <div className="chat">
      <div className="chat__top">
        <Avatar src={`https://avatars.dicebear.com/api/male/${seed}.svg`} />
        <div className="chat-info">
          <h3>Room Name</h3>
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
