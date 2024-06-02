import "../styles/styles.css";
import React, { useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
const BoxSong = (song) => {
  return (
    <li class="box">
      <a href="artist.html">
        <img id="song-img" src="images/albums/nic.jpg" alt="placeholder" />
      </a>
      <ul>
        <li>
          <b>
            <a id="song-title" href="artist.html">
              Yee Yee
            </a>
          </b>
        </li>
        <li>
          <a id="album-title" href="artist.html">
            Redneck Rap
          </a>
        </li>
        <li>
          <ul id="artist-list">
            <li>
              <a>Nic</a>
            </li>
          </ul>
        </li>
      </ul>
    </li>
  );
};

export default BoxSong;
