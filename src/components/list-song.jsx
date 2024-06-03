import "../styles/styles.css";
import "../styles/listsong.css";
import { Outlet, Link } from "react-router-dom";

const ListSong = (listSong) => {
  return (
    <li>
      <div class="song">
        <div class="left">
          <Link to="/album">{listSong.title}</Link>
          <Link to="/artist">{listSong.artist}</Link>
        </div>
        <div class="right">
          <a>{listSong.length}</a>
          <a>
            <img src="https://indie-tunes-housing-backend.onrender.com/images/icons8-play-30.png" />
          </a>
          <a>
            <img src="https://indie-tunes-housing-backend.onrender.com/images/icons8-add-shopping-cart-30.png" />
          </a>
        </div>
      </div>
    </li>
  );
};

export default ListSong;
