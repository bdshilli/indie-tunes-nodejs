const ArtistList = () => {
  return (
    <main id="main-content">
      <div class="margins">
        <section class="subheadding columns">
          <h2 class="one">Artists</h2>
          <div class="search-bar one">
            <input id="search-text" type="search" />
            <button id="search-btn">
              <img src="images/icons8-magnifying-glass-50.png" />
            </button>
          </div>
        </section>
        <section>
          <h2>B</h2>
          <section class="directory">
            <ul class="box-ul">
              <li class="box">
                <a href="artist.html">
                  <img src="images/albums/bradley.jpg" alt="placeholder" />
                </a>
                <ul>
                  <li>
                    <a href="artist.html">Big Brad</a>
                  </li>
                </ul>
              </li>
              <li class="box">
                <a href="artist.html">
                  <img src="images/albums/benji.jpg" alt="placeholder" />
                </a>
                <ul>
                  <li>
                    <a href="artist.html">Benji</a>
                  </li>
                </ul>
              </li>
            </ul>
          </section>
          <h2>N</h2>
          <section class="directory">
            <ul class="box-ul">
              <li class="box">
                <a href="artist.html">
                  <img src="images/albums/nic.jpg" alt="placeholder" />
                </a>
                <ul>
                  <li>
                    <a href="artist.html">Nic</a>
                  </li>
                </ul>
              </li>
            </ul>
          </section>
          <h2>P</h2>
          <section class="directory">
            <ul class="box-ul">
              <li class="box">
                <a href="artist.html">
                  <img src="images/albums/pip.jpg" alt="placeholder" />
                </a>
                <ul>
                  <li>
                    <a href="artist.html">Pip</a>
                  </li>
                </ul>
              </li>
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
