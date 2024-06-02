import "../styles/styles.css";
import "../styles/boxalbum.css";

const BoxAlbum = (boxAlbum) => {
  const imageSrc = `https://bdshilli.github.io/json/images/albums/${boxAlbum.image}`;
  return (
    <div class="directory columns wrap ">
      <div class="one box">
        <a href="#">
          <img src={imageSrc} alt={boxAlbum.imag} />
        </a>
        <ul>
          <li>
            <a href="#">{boxAlbum.title}</a>
          </li>
          <li>
            <a href="#">{boxAlbum.artist}</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BoxAlbum;
