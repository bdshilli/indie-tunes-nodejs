import "../styles/artist.css";
import "../styles/styles.css";
import "../styles/directory.css";
import BoxAlbum from "../components/box-album";

const Artist = () => {
  return (
    <div id="artist">
      <img
        id="artist-img"
        src="https://bdshilli.github.io/json/images/albums/nic.jpg"
        alt="placeholder"
      />
      <h2>Nic</h2>
      <p>Hi! I'm Nicolas and I am an up and coming rapper.</p>
      <h3>Albums:</h3>
      <section class="directory">
        <ul class="box-ul">
          <BoxAlbum image={"nic.jpg"} title={"Redneck Rap"} artist={"nic"} />
          <BoxAlbum image={"nic.jpg"} title={"City Boy"} artist={"nic"} />
        </ul>
      </section>
    </div>
  );
};

export default Artist;
