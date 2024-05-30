import "../styles/home.css";
import "../styles/styles.css";
const home = () => {
  return (
    <>
      <div class="columns">
        <section id="top-trending" class="four">
          <h2>Top Trending</h2>
          <section class="directory">
            <ul id="top-trending-list" class="box-ul">
              <li class="box">
                <a href="artist.html">
                  <img src="images/albums/nic.jpg" alt="placeholder" />
                </a>
                <ul>
                  <li>
                    <b>
                      <a id="song-title " href="artist.html">
                        Yee Yee
                      </a>
                    </b>
                  </li>
                  <li>
                    <a id="album-title " href="artist.html">
                      Redneck Rap
                    </a>
                  </li>
                  <li>
                    <ul id="artist-list">
                      <li>
                        <a>Nic</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </section>
          <div id="concerts">
            <h2>Upcoming Concerts</h2>
            <img src="images/banner.jpg" alt="banner placeholder" />
          </div>
        </section>
        <section id="explore" class="one">
          <h2>Explore</h2>
          <section>
            <div class="one box">
              <a href="album.html">
                <img src="images/albums/bradley2.jpg" alt="placeholder" />
              </a>
              <ul>
                <li>
                  <h3>
                    <a href="album.html">Jobless</a>
                  </h3>
                </li>
                <li>
                  <a href="album.html">Stepdad Vibes</a>
                </li>
                <li>
                  <a href="artist.html">Big Brad</a>
                </li>
              </ul>
            </div>
            <div class="one box">
              <a href="album.html">
                <img src="images/albums/bradley2.jpg" alt="placeholder" />
              </a>
              <ul>
                <li>
                  <h3>
                    <a href="album.html">Deadbeat Dad</a>
                  </h3>
                </li>
                <li>
                  <a href="album.html">Stepdad Vibes</a>
                </li>
                <li>
                  <a href="artist.html">Big Brad</a>
                </li>
              </ul>
            </div>
            <div class="one box">
              <a href="album.html">
                <img src="images/albums/nic.jpg" alt="placeholder" />
              </a>
              <ul>
                <li>
                  <h3>
                    <a href="album.html">Rivian Grind</a>
                  </h3>
                </li>
                <li>
                  <a href="album.html">Redneck Rap</a>
                </li>
                <li>
                  <a href="artist.html">Nic</a>
                </li>
              </ul>
            </div>
            <img src="images/icons8-refresh-30.png" alt="placeholder" />
          </section>
        </section>
      </div>
    </>
  );
};

export default home;
