import "../styles/styles.css";
import "../styles/boxalbum.css";
import { Outlet, Link } from "react-router-dom";

const BoxAlbum = (boxAlbum) => {
  const imageSrc = `https://indie-tunes-housing-backend.onrender.com/images/albums/${boxAlbum.image}`;
  return (
    <div class="directory columns wrap ">
      <div class="one box">
        <img src={imageSrc} alt={boxAlbum.image} />
        <ul>
          <li>
            <b>{boxAlbum.title}</b>
          </li>
          <li>
            <a>{boxAlbum.artist}</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BoxAlbum;
