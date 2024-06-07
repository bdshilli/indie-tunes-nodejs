import "../styles/styles.css";
import React, { useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
const BoxSong = (boxSong) => {
  const imageSrc = `https://indie-tunes-housing-backend.onrender.com/images/albums/${boxSong.image}`;
  return (
    <li class="box">
      <Link to="/album">
        <img id="song-img" src={imageSrc} alt={boxSong.image} />
      </Link>
      <ul>
        <li>
          <b>
            <Link to="/album">{boxSong.title}</Link>
          </b>
        </li>
        <li>
          <Link to="/album">{boxSong.album}</Link>
        </li>
        <li>
          <ul id="artist-list">
            <li>
              <Link to="/artist">{boxSong.artist}</Link>
            </li>
          </ul>
        </li>
      </ul>
    </li>
  );
};

export default BoxSong;
