import "../styles/styles.css";
import "../styles/boxalbum.css";
import { Outlet, Link } from "react-router-dom";

const BoxAlbum = (boxAlbum) => {
  const imageSrc = `https://bdshilli.github.io/json/images/albums/${boxAlbum.image}`;
  return (
    <div class="directory columns wrap ">
      <div class="one box">
        <Link to="/album">
          <img src={imageSrc} alt={boxAlbum.imag} />
        </Link>

        <ul>
          <li>
            <Link to="/album">{boxAlbum.title}</Link>
          </li>
          <li>
            <Link to="/artist">{boxAlbum.artist}</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BoxAlbum;
