import "../styles/genre.css";
import "../styles/styles.css";
import "../styles/songlist.css";
import "../styles/directory.css";
import BoxAlbum from "../components/box-album";
import ListSong from "../components/list-song";

const Genre = () => {
  return (
    <div id="genre" class="margins">
      <section class="banner">
        <img src="https://bdshilli.github.io/json/images/indierap.jpg" />
      </section>
      <section class="columns">
        <div class="one directory columns wrap">
          <BoxAlbum
            image={"bradley2.jpg"}
            title={"Don't Bully Me"}
            artist={"Brad"}
          />
          <BoxAlbum
            image={"bradley2.jpg"}
            title={"Don't Bully Me"}
            artist={"Brad"}
          />
          <BoxAlbum
            image={"bradley2.jpg"}
            title={"Don't Bully Me"}
            artist={"Brad"}
          />
          <BoxAlbum
            image={"bradley2.jpg"}
            title={"Don't Bully Me"}
            artist={"Brad"}
          />
          <BoxAlbum
            image={"bradley2.jpg"}
            title={"Don't Bully Me"}
            artist={"Brad"}
          />
          <BoxAlbum
            image={"bradley2.jpg"}
            title={"Don't Bully Me"}
            artist={"Brad"}
          />
          <BoxAlbum
            image={"bradley2.jpg"}
            title={"Don't Bully Me"}
            artist={"Brad"}
          />
        </div>
        <div class="one">
          <ul id="song-list">
            <ListSong title={"hello"} artist={"nic"} length={"3:00"} />
            <ListSong title={"hello"} artist={"nic"} length={"3:00"} />
            <ListSong title={"hello"} artist={"nic"} length={"3:00"} />
            <ListSong title={"hello"} artist={"nic"} length={"3:00"} />
            <ListSong title={"hello"} artist={"nic"} length={"3:00"} />
            <ListSong title={"hello"} artist={"nic"} length={"3:00"} />
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Genre;
