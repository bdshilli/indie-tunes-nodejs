import "../styles/styles.css";
import "../styles/listsong.css";
import { Outlet, Link } from "react-router-dom";

const ListSong = (listSong) => {
  return (
    <li key={listSong.title}>
      <div class="song">
        <div class="left">
          <a>{listSong.title}</a>
        </div>
        <div class="right">
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
