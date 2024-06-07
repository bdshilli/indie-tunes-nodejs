import "../styles/styles.css";
import "../styles/fullalbum.css";
import ListSong from "../components/list-song";
import React, { useEffect } from "react";
import { Outlet, Link } from "react-router-dom";

const FullAlbum = (fullAlbum) => {
  const imageSrc = `https://indie-tunes-housing-backend.onrender.com/images/albums/${fullAlbum.image}`;
  return (
    <div id="falbum">
      <img id="album-image" src={imageSrc} alt="placeholder" />
      <ul>
        <li>
          <h2 id="album-title">{fullAlbum.title}</h2>
        </li>
        <li>
          <a>
            <b>Artist: </b>
          </a>
          <a>{fullAlbum.artist}</a>
        </li>
        <li>
          <a>
            <b>Genre: </b>
          </a>
          <a id="album-genre">{fullAlbum.genre}</a>
        </li>
        <li>
          <a>
            <b>Advisory: </b>
          </a>
          <a id="album-advisory">{fullAlbum.advisory}</a>
        </li>
      </ul>
      <ul id="song-list">
        {fullAlbum.songs.map((song) => (
          <ListSong key={song.title} title={song.title} length={song.length} />
        ))}
      </ul>
    </div>
  );
};

export default FullAlbum;
