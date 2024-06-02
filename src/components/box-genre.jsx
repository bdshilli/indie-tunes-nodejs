import "../styles/styles.css";
import "../styles/boxgenre.css";

const BoxGenre = (boxGenre) => {
  const imageSrc = `https://bdshilli.github.io/json/images/albums/${boxGenre.image}`;
  return (
    <li class="box">
      <a href="#">
        <img src={imageSrc} alt={boxGenre.image} />
      </a>
      <ul>
        <li>
          <a href="#">{boxGenre.title}</a>
        </li>
      </ul>
    </li>
  );
};

export default BoxGenre;
