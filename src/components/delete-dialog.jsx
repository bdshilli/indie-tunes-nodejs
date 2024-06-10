import "../styles/dialog.css";
import React, { useState } from "react";

const DeleteDialog = (props) => {
  const [result, setResult] = useState("");

  const deleteFullAlbum = async (event) => {
    const response = await fetch(
      `https://indie-tunes-housing-backend.onrender.com/api/albums/${props._id}`,
      {
        method: "DELETE",
      }
    );

    if (response.status === 200) {
      setResult("Album Successfully deleted");
      props.hideFullAlbum();
      props.closeDialog();
    } else {
      console.log("Error deleting album", response);
      setResult(response.message);
    }
  };

  return (
    <div id="delete-dialog" className="w3-modal">
      <div className="w3-modal-content">
        <div className="w3-container">
          <span
            id="dialog-close"
            className="w3-button w3-display-topright"
            onClick={props.closeDialog}
          >
            &times;
          </span>
          <div id="delete-content">
            <h3>Are you sure you want to delete the album "{props.title}"?</h3>
            <section>
              <button onClick={deleteFullAlbum}>Yes</button>
              <button onClick={props.closeDialog}>No</button>
            </section>
            <span>{result}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteDialog;
