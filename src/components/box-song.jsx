import "../styles/styles.css";
import React, { useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
const BoxSong = (boxSong) => {
  const imageSrc = `https://bdshilli.github.io/json/images/albums/${boxSong.image}`;
  return (
    <li class="box">
      <Link to="/album">
        <img id="song-img" src={imageSrc} alt={boxSong.image} />
      </Link>
      <ul>
        <li>
          <b>
            <Link to="/album">
              <a id="song-title">{boxSong.title}</a>
            </Link>
          </b>
        </li>
        <li>
          <Link to="/album">
            <a id="album-title">{boxSong.album}</a>
          </Link>
        </li>
        <li>
          <ul id="artist-list">
            <li>
              <Link to="/artist">
                <a>{boxSong.artist}</a>
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </li>
  );
};

export default BoxSong;
