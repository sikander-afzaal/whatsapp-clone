import React, { useEffect, useState } from "react";
import { Avatar } from "@material-ui/core";
import "./SideChat.css";
import db from "../firebase";
import { Link } from "react-router-dom";
function SideChat({ addNewChat, name, id }) {
  const [seed, setSeed] = useState("lol");
  const [messages, setMessages] = useState([]);

  //getting a random image
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 10000));
  }, []);

  //getting all the messages so we can get the last message of that room
  useEffect(() => {
    if (id) {
      db.collection("Rooms")
        .doc(id)
        .collection("messages")
        .orderBy("timestamp", "desc") //desc so that the first message in the array would be the latest message
        .onSnapshot((snapshot) => {
          setMessages(snapshot.docs.map((doc) => doc.data()));
        });
    }
  }, [id]);

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
        <p>{messages[0]?.message}</p>
      </div>
    </Link>
  );
}

export default SideChat;
