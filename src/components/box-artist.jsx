import "../styles/styles.css";
import "../styles/boxartist.css";
import { Outlet, Link } from "react-router-dom";

const BoxArtist = (boxArtist) => {
  const imageSrc = `https://indie-tunes-housing-backend.onrender.com/images/albums/${boxArtist.image}`;
  return (
    <li class="box">
      <Link to="/artist">
        <img src={imageSrc} alt={boxArtist.image} />
      </Link>
      <ul>
        <li>
          <Link to="/artist">{boxArtist.name}</Link>
        </li>
      </ul>
    </li>
  );
};

export default BoxArtist;
