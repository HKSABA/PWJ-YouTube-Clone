import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const [inputSearch, setInputSearch] = useState("");

  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <img className="candy__image" 
          src="https://www.flaticon.com/premium-icon/icons/svg/3173/3173455.svg"
          alt=""
        />
        <Link to="/">
          <img
            className="header__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/YouTube_Logo.svg/512px-YouTube_Logo.svg.png"
            alt=""
          />
        </Link>
        <img className="snowball__image"
          src="https://image.flaticon.com/icons/svg/214/214307.svg"
          alt=""
        />
      </div>

      <div className="header__input">
        <input 
          onChange={(e) => setInputSearch(e.target.value)} 
          value={inputSearch} 
          placeholder="Search" 
          type="text" 
        />
        <Link to={`/search/${inputSearch}`}>
          <SearchIcon className="header__inputButton" />
        </Link>
      </div>

      <div className="header__icons">
        <VideoCallIcon className="header__icon" />
        <AppsIcon className="header__icon" />
        <NotificationsIcon className="header__icon" />
        <Avatar
          className="header__icon"
          src="https://scontent.fdac7-1.fna.fbcdn.net/v/t1.0-9/116435916_823766338028632_5426211546491643703_n.jpg?_nc_cat=105&_nc_sid=09cbfe&_nc_ohc=fTYzdARljiAAX_3zU-l&_nc_ht=scontent.fdac7-1.fna&oh=600a90c3468e8f3845357e26ab4afc9f&oe=5F491DC3"
          alt="Hajera Khatun"
        />
      </div>
    </div>
  );
}

export default Header;
