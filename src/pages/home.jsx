import "../styles/home.css";
import "../styles/styles.css";
import BoxSong from "../components/box-song";
import ListSong from "../components/list-song";
import FullAlbum from "../components/full-album";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [albums, setAlbums] = useState([]);

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
              <BoxSong
                image={"nic.jpg"}
                title={"Yee Yee"}
                album={"Redneck Rap"}
                artist={"nic"}
              />
              <BoxSong
                image={"nic.jpg"}
                title={"Yee Yee"}
                album={"Redneck Rap"}
                artist={"nic"}
              />
              <BoxSong
                image={"nic.jpg"}
                title={"Yee Yee"}
                album={"Redneck Rap"}
                artist={"nic"}
              />
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
              alt="placeholder"
            />
          </section>
        </section>
      </div>
      <div id="released">
        <h2>Newly Released Albums</h2>
        {albums.map((album) => (
          <FullAlbum
            id={album.id}
            title={album.title}
            image={album.image}
            artists={album.artist_list}
            genre={album.genre}
            advisory={album.advisory}
            songs={album.song_list}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
