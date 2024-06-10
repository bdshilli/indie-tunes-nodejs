import "../styles/styles.css";
import "../styles/fullalbum.css";
import EditDialog from "./edit-dialog";
import React, { useState } from "react";

const FullAlbum = (props) => {
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [fullAlbum, setFullAlbum] = useState(props);

  const imageSrc = `https://indie-tunes-housing-backend.onrender.com/images/albums/${fullAlbum.image}`;

  const openEditDialog = () => {
    setShowEditDialog(true);
  };

  const closeEditDialog = () => {
    setShowEditDialog(false);
  };

  const editFullAlbum = (album) => {
    setFullAlbum(album);
  };

  return (
    <>
      {showEditDialog ? (
        <EditDialog
          closeDialog={closeEditDialog}
          editFullAlbum={editFullAlbum}
          _id={fullAlbum._id}
          title={fullAlbum.title}
          artist={fullAlbum.artist}
          genre={fullAlbum.genre}
          advisory={fullAlbum.advisory}
          image={fullAlbum.image}
        />
      ) : (
        ""
      )}
      <div id="falbum" className="columns">
        <img
          className="one"
          id="album-image"
          src={imageSrc}
          alt="placeholder"
        />
        <div>
          <header className="columns">
            <h2 id="album-title">{fullAlbum.title}</h2>
            <section id="change-buttons">
              <a href="#" onClick={openEditDialog}>
                &#9998;
              </a>
              <a href="#">&#x2715;</a>
            </section>
          </header>
          <main>
            <ul>
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
          </main>
        </div>
      </div>
    </>
  );
};

export default FullAlbum;
