import React, { useEffect, useState } from "react";
import { Avatar } from "@material-ui/core";
import "./SideChat.css";
import db from "../firebase";
import { Link } from "react-router-dom";
function SideChat({ addNewChat, name, id }) {
  const [seed, setSeed] = useState("lol");
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 10000));
  }, []);
  const createChat = () => {
    const roomName = prompt("Create new Room");
    //adding room to db
    db.collection("Rooms").add({
      name: roomName,
    });
  };
  return addNewChat ? (
    <div className="sidechat" onClick={createChat}>
      <h2>Add New Chat</h2>
    </div>
  ) : (
    <Link to={`/rooms/${id}`} className="sidechat">
      <Avatar src={`https://avatars.dicebear.com/api/male/${seed}.svg`} />
      <div className="room-info">
        <h1>{name}</h1>
        <p>last message</p>
      </div>
    </Link>
  );
}

export default SideChat;
