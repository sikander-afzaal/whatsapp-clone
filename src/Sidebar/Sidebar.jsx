import { Avatar, IconButton } from "@material-ui/core";
import { Chat, DonutLarge, MoreVert } from "@mui/icons-material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import SideChat from "./SideChat";
import db from "../firebase";
import useStateValue from "../Context/authContext";
function Sidebar() {
  const [{ user }, dispatch] = useStateValue();
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    // getting data of rooms from db
    const unsubscribe = db.collection("Rooms").onSnapshot((snapshot) => {
      setRooms(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
    //
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        {console.log(user)}
        <Avatar src={user?.photoURL} />
        <div className="icon-cont">
          <IconButton>
            <DonutLarge />
          </IconButton>
          <IconButton>
            <Chat />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__mid">
        <div className="cont-search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="search or start a new chat" />
        </div>
      </div>
      <div className="sidebar__bottom">
        <SideChat addNewChat />
        {rooms.map((elem) => {
          return <SideChat key={elem.id} id={elem.id} name={elem.data.name} />;
        })}
      </div>
    </div>
  );
}

export default Sidebar;
