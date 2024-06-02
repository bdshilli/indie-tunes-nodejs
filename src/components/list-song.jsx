import "../styles/styles.css";
import "../styles/listsong.css";

const ListSong = (listSong) => {
  /*const imageSrc = `https://github.com/bdshilli/bdshilli.github.io/tree/main/json/images${
    album.album - image
  }`;*/
  return (
    <li>
      <div class="song">
        <div class="left">
          <a>{listSong.title}</a>
          <a>{listSong.artist}</a>
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
