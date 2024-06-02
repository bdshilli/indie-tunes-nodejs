import "../styles/album.css";
import "../styles/styles.css";
import "../styles/songlist.css";
import ListSong from "../components/list-song";

const Album = () => {
  return (
    <div id="album">
      <img id="album-image" src="https://placehold.co/200" alt="placeholder" />
      <ul>
        <li>
          <h2 id="album-title">Redneck Rap</h2>
        </li>
        <li>
          <a>
            <b>Artists:</b>
          </a>
        </li>
        <li>
          <ul id="artist-list">
            <li>
              <a>Nic</a>
            </li>
          </ul>
        </li>
        <li>
          <a>&nbsp;</a>
        </li>
        <li>
          <a>
            <b>Genre: </b>
          </a>
          <a id="album-genre">Rap</a>
        </li>
        <li>
          <a>
            <b>Advisory: </b>
          </a>
          <a id="album-advisory">Explicit</a>
        </li>
      </ul>
      <ul id="song-list">
        <ListSong title={"hello"} artist={"nic"} length={"3:00"} />
        <ListSong title={"hello"} artist={"nic"} length={"3:00"} />
        <ListSong title={"hello"} artist={"nic"} length={"3:00"} />
        <ListSong title={"hello"} artist={"nic"} length={"3:00"} />
        <ListSong title={"hello"} artist={"nic"} length={"3:00"} />
        <ListSong title={"hello"} artist={"nic"} length={"3:00"} />
        <ListSong title={"hello"} artist={"nic"} length={"3:00"} />
        <ListSong title={"hello"} artist={"nic"} length={"3:00"} />
        <ListSong title={"hello"} artist={"nic"} length={"3:00"} />
        <ListSong title={"hello"} artist={"nic"} length={"3:00"} />
        <ListSong title={"hello"} artist={"nic"} length={"3:00"} />
        <ListSong title={"hello"} artist={"nic"} length={"3:00"} />
      </ul>
    </div>
  );
};

export default Album;
