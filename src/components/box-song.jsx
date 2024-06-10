import "../styles/styles.css";
import React, { useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
const BoxSong = (boxSong) => {
  const imageSrc = `https://indie-tunes-housing-backend.onrender.com/images/albums/${boxSong.image}`;
  return (
    <li class="box">
      <img id="song-img" src={imageSrc} alt={boxSong.image} />
      <ul>
        <li>
          <b>
            <a>{boxSong.title}</a>
          </b>
        </li>
        <li>
          <a>{boxSong.album}</a>
        </li>
        <li>
          <ul id="artist-list">
            <li>
              <a>{boxSong.artist}</a>
            </li>
          </ul>
        </li>
      </ul>
    </li>
  );
};

export default BoxSong;
