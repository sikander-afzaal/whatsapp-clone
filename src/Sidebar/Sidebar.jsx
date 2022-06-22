import { Avatar, IconButton } from "@material-ui/core";
import { Chat, DonutLarge, MoreVert } from "@mui/icons-material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import React from "react";
import "./Sidebar.css";
import SideChat from "./SideChat";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <Avatar />
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
        <SideChat />
        <SideChat />
        <SideChat />
        <SideChat />
        <SideChat />
      </div>
    </div>
  );
}

export default Sidebar;
