import "../styles/home.css";
import "../styles/styles.css";
import BoxSong from "../components/box-song";
import BoxAlbum from "../components/box-album";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  // get random item from a Set (from https://stackoverflow.com/questions/42739256/how-get-random-item-from-es6-map-or-set)
  function getRandomItem(set) {
    let items = Array.from(set);
    return items[Math.floor(Math.random() * items.length)];
  }

  const [albums, setAlbums] = useState([]);
  const [showAddDialog, setShowAddDialog] = useState(false);

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        "https://indie-tunes-housing-backend.onrender.com/api/albums"
      );
      setAlbums(response.data);
    })();
  }, []);
  return (
    <>
      <div class="columns">
        <section id="top-trending" class="four">
          <h2>Top Trending</h2>
          <section class="directory">
            <ul id="top-trending-list" class="box-ul">
              <BoxAlbum image={"nic.jpg"} title={"Yee Yee"} artist={"nic"} />
              <BoxAlbum image={"nic.jpg"} title={"Yee Yee"} artist={"nic"} />
              <BoxAlbum image={"nic.jpg"} title={"Yee Yee"} artist={"nic"} />
            </ul>
          </section>
          <div id="concerts">
            <h2>Upcoming Concerts</h2>
            <img
              src="https://indie-tunes-housing-backend.onrender.com/images/banner.jpg"
              alt="banner placeholder"
            />
          </div>
        </section>
        <section id="explore" class="one">
          <h2>Explore</h2>
          <section>
            <ul>
              <BoxSong
                image={"bradley2.jpg"}
                title={"Jobless"}
                album={"Stepdad Vibes"}
                artist={"Big Brad"}
              />
              <BoxSong
                image={"bradley2.jpg"}
                title={"Deadbeat Dad"}
                album={"Stepdad Vibes"}
                artist={"Big Brad"}
              />
              <BoxSong
                image={"nic.jpg"}
                title={"Rivian Grind"}
                album={"Redneck Rap"}
                artist={"Nic"}
              />
            </ul>
            <img
              src="https://indie-tunes-housing-backend.onrender.com/images/icons8-refresh-30.png"
              alt="icon"
            />
          </section>
        </section>
      </div>
    </>
  );
};

export default Home;
