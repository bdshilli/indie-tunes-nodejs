import "../styles/album-list.css";
import "../styles/styles.css";
import BoxSong from "../components/box-song";
import ListSong from "../components/list-song";
import FullAlbum from "../components/full-album";
import AddDialog from "../components/add-dialog";
import React, { useState, useEffect } from "react";
import axios from "axios";

const AlbumList = () => {
  const [albums, setAlbums] = useState([]);
  const [showAddDialog, setShowAddDialog] = useState(false);

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        "https://indie-tunes-housing-backend.onrender.com/api/albums"
      );
      setAlbums(response.data);
    })();
  }, []);

  const addAlbum = (album) => {
    setAlbums((albums) => [...albums, album]);
  };

  const openAddDialog = () => {
    setShowAddDialog(true);
  };

  const closeAddDialog = () => {
    setShowAddDialog(false);
  };

  return (
    <div>
      <h2>Albums</h2>
      <button id="add-album" onClick={openAddDialog}>
        +
      </button>
      {showAddDialog ? (
        <AddDialog closeDialog={closeAddDialog} addAlbum={addAlbum} />
      ) : (
        ""
      )}
      {albums.map((album) => (
        <FullAlbum
          key={album.title}
          title={album.title}
          image={album.image}
          artist={album.artist}
          genre={album.genre}
          advisory={album.advisory}
          songs={album.song_list}
        />
      ))}
    </div>
  );
};

export default AlbumList;
