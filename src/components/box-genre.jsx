import "../styles/styles.css";
import "../styles/boxgenre.css";
import { Outlet, Link } from "react-router-dom";

const BoxGenre = (boxGenre) => {
  const imageSrc = `https://indie-tunes-housing-backend.onrender.com/images/albums/${boxGenre.image}`;
  return (
    <li class="box">
      <Link to="/genre">
        <img src={imageSrc} alt={boxGenre.image} />
      </Link>
      <ul>
        <li>
          <Link to="/genre">{boxGenre.title}</Link>
        </li>
      </ul>
    </li>
  );
};

export default BoxGenre;
