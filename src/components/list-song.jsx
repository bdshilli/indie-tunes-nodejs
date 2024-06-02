import "../styles/styles.css";
import "../styles/listsong.css";
import { Outlet, Link } from "react-router-dom";

const ListSong = (listSong) => {
  /*const imageSrc = `https://github.com/bdshilli/bdshilli.github.io/tree/main/json/images${
    album.album - image
  }`;*/
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
            <img src="https://bdshilli.github.io/json/images/icons8-play-30.png" />
          </a>
          <a>
            <img src="https://bdshilli.github.io/json/images/icons8-add-shopping-cart-30.png" />
          </a>
        </div>
      </div>
    </li>
  );
};

export default ListSong;
