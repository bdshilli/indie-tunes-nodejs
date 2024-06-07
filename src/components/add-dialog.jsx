import "../styles/dialog.css";
import React, { useState } from "react";

const AddDialog = (props) => {
  const [inputs, setInputs] = useState({});
  const [result, setResult] = useState("");

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleImageChange = (event) => {
    const name = event.target.name;
    const value = event.target.files[0];
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending Data..");
    const formData = new FormData(event.target);

    const response = await fetch(
      "https://indie-tunes-housing-backend.onrender.com/api/albums",
      {
        method: "POST",
        body: formData,
      }
    );

    if (response.status === 200) {
      setResult("Album Successfully Added");
      event.target.reset(); //reset your form fields
      props.addAlbum(await response.json());
      props.closeDialog();
    } else {
      console.log("Error adding house", response);
      setResult(response.message);
    }
  };

  return (
    <div id="add-dialog" className="w3-modal">
      <div className="w3-modal-content">
        <div className="w3-container">
          <span
            id="dialog-close"
            className="w3-button w3-display-topright"
            onClick={props.closeDialog}
          >
            &times;
          </span>
          <form id="add-property-form" onSubmit={onSubmit}>
            <p>
              <label htmlFor="title">Album Title:</label>
              <input
                type="text"
                id="title"
                name="title"
                value={inputs.title || ""}
                onChange={handleChange}
                required
              />
            </p>
            <p>
              <label htmlFor="artist">Artist:</label>
              <input
                type="text"
                id="artist"
                name="artist"
                value={inputs.artist || ""}
                onChange={handleChange}
                required
              />
            </p>
            <p>
              <label htmlFor="genre">Genre:</label>
              <input
                type="text"
                id="genre"
                name="genre"
                value={inputs.genre || ""}
                onChange={handleChange}
                required
              />
            </p>
            <p>
              <label htmlFor="advisory">Advisory:</label>
              <input
                type="text"
                id="advisory"
                name="advisory"
                value={inputs.advisory || ""}
                onChange={handleChange}
                required
              />
            </p>

            <section className="columns">
              <p id="img-prev-section">
                <img
                  id="img-prev"
                  src={
                    inputs.image != null
                      ? URL.createObjectURL(inputs.image)
                      : ""
                  }
                  alt=""
                />
              </p>
              <p id="img-upload">
                <label htmlFor="image">Upload Image:</label>
                <input
                  type="file"
                  id="image"
                  name="image"
                  onChange={handleImageChange}
                  accept="image/*"
                />
              </p>
            </section>
            <p>
              <button type="submit">Submit</button>
            </p>
            <p>{result}</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddDialog;
