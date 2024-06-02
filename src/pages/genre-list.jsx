import "../styles/genresartists.css";
import "../styles/styles.css";
import "../styles/directory.css";
import BoxGenre from "../components/box-genre";

const GenreList = () => {
  return (
    <div>
      <section class="subheadding columns">
        <h2 class="one">Genres</h2>
        <div class="search-bar one">
          <input id="search-text" type="search" />
          <button id="search-btn">
            <img src="https://bdshilli.github.io/json/images/icons8-magnifying-glass-50.png" />
          </button>
        </div>
      </section>
      <section class="directory">
        <ul class="box-ul">
          <BoxGenre image={"bradley2.jpg"} title={"Genre Title"} />
          <BoxGenre image={"bradley2.jpg"} title={"Genre Title"} />
          <BoxGenre image={"bradley2.jpg"} title={"Genre Title"} />
          <BoxGenre image={"bradley2.jpg"} title={"Genre Title"} />
          <BoxGenre image={"bradley2.jpg"} title={"Genre Title"} />
          <BoxGenre image={"bradley2.jpg"} title={"Genre Title"} />
          <BoxGenre image={"bradley2.jpg"} title={"Genre Title"} />
          <BoxGenre image={"bradley2.jpg"} title={"Genre Title"} />
          <BoxGenre image={"bradley2.jpg"} title={"Genre Title"} />
          <BoxGenre image={"bradley2.jpg"} title={"Genre Title"} />
          <BoxGenre image={"bradley2.jpg"} title={"Genre Title"} />
          <BoxGenre image={"bradley2.jpg"} title={"Genre Title"} />
          <BoxGenre image={"bradley2.jpg"} title={"Genre Title"} />
          <BoxGenre image={"bradley2.jpg"} title={"Genre Title"} />
          <BoxGenre image={"bradley2.jpg"} title={"Genre Title"} />
          <BoxGenre image={"bradley2.jpg"} title={"Genre Title"} />
          <BoxGenre image={"bradley2.jpg"} title={"Genre Title"} />
          <BoxGenre image={"bradley2.jpg"} title={"Genre Title"} />
          <BoxGenre image={"bradley2.jpg"} title={"Genre Title"} />
          <BoxGenre image={"bradley2.jpg"} title={"Genre Title"} />
          <BoxGenre image={"bradley2.jpg"} title={"Genre Title"} />
        </ul>
      </section>
    </div>
  );
};
export default GenreList;
