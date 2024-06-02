import "../styles/genresartists.css";
import "../styles/styles.css";
import BoxArtist from "../components/box-artist";

const ArtistList = () => {
  return (
    <main id="main-content">
      <div>
        <section class="subheadding columns">
          <h2 class="one">Artists</h2>
          <div class="search-bar one">
            <input id="search-text" type="search" />
            <button id="search-btn">
              <img src="https://bdshilli.github.io/json/images/icons8-magnifying-glass-50.png" />
            </button>
          </div>
        </section>
        <section>
          <h2>B</h2>
          <section class="directory">
            <ul class="box-ul">
              <BoxArtist image={"bradley.jpg"} name={"Big Brad"} />
              <BoxArtist image={"benji.jpg"} name={"Benji"} />
            </ul>
          </section>
          <h2>N</h2>
          <section class="directory">
            <ul class="box-ul">
              <BoxArtist image={"nic.jpg"} name={"Nic"} />
            </ul>
          </section>
          <h2>P</h2>
          <section class="directory">
            <ul class="box-ul">
              <BoxArtist image={"pip.jpg"} name={"Pip"} />
            </ul>
          </section>
        </section>
        <a>
          Note: My idea here is that the letters (like A and B) will act as
          headers, dynamically appearing and disappearing based on whether
          there's at least one artist whose name starts with that letter.
        </a>
      </div>
    </main>
  );
};
export default ArtistList;
