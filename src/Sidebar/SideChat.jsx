import React, { useEffect, useState } from "react";
import { Avatar } from "@material-ui/core";
import "./SideChat.css";
function SideChat({ addNewChat }) {
  const [seed, setSeed] = useState("lol");
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 10000));
  }, []);
  const createChat = () => {};
  return addNewChat ? (
    <div className="sidechat" onClick={createChat}>
      <h2>Add New Chat</h2>
    </div>
  ) : (
    <div className="sidechat">
      <Avatar src={`https://avatars.dicebear.com/api/male/${seed}.svg`} />
      <div className="room-info">
        <h1>Room Name</h1>
        <p>last message</p>
      </div>
    </div>
  );
}

export default SideChat;
