import React, { useEffect, useState } from "react";
import { Avatar } from "@material-ui/core";
import "./Chat.css";
import { AttachFile, InsertEmoticon, Mic, MoreVert } from "@mui/icons-material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { IconButton } from "@mui/material";
import { useParams } from "react-router-dom";
import useStateValue from "../Context/authContext";
import db from "../firebase";
import firebase from "firebase/compat/app";
function Chat() {
  const { roomId } = useParams();
  const [seed, setSeed] = useState("lol");
  const [input, setInput] = useState("");
  const [roomName, setRoomName] = useState("");
  const [messages, setMessages] = useState([]);
  const [{ user }, dispatch] = useStateValue();

  const sendMessage = (e) => {
    // for the text input (messages that we type)
    e.preventDefault();
    db.collection("Rooms").doc(roomId).collection("messages").add({
      name: user.displayName,
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };
  //fetching data from db using the id in the url which is passed through the sidebar component
  useEffect(() => {
    if (roomId) {
      //getting names of rooms
      db.collection("Rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomName(snapshot.data().name));
      //seed for avatar
      setSeed(Math.floor(Math.random() * 10000));
      //getting messages of rooms
      db.collection("Rooms")
        .doc(roomId)
        .collection("messages") // going to messages collection of that room
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) =>
          setMessages(
            snapshot.docs.map((doc) => {
              return doc.data();
            })
          )
        );
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
        {messages.map((elem) => {
          return (
            <p
              className={`chat-message ${
                user.displayName === elem?.name ? "chat-reciever" : ""
              }`}
            >
              <span className="name-chat">{elem?.name}</span> {elem?.message}
              <span className="chat-time">
                {new Date(elem.timestamp?.toDate()).toUTCString()}
              </span>
            </p>
          );
        })}
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
