/*const about = () => {
  function importAll(r) {
    return r.keys().map(r);
  }
  const images = importAll(
    require.context("../images/slideshow", false, /\.(png|jpe?g|svg)$/)
  );

  const [index, setIndex] = useState(0);

  const slideForward = () => {
    setIndex(index === images.length - 1 ? 0 : index + 1);
  };

  const slideBackward = () => {
    setIndex(index === 0 ? images.length - 1 : index - 1);
  };

  return (
    <div id="genre" class="margins">
      <section id="slideshow" class="banner">
        <img src={images[index]} alt={images[index]} />
        <p id="forward-arrow" onClick={slideForward}>
          &gt;
        </p>
        <p id="backward-arrow" onClick={slideBackward}>
          &lt;
        </p>
      </section>
      <section class>
        <h2>About Us</h2>
        <h3>Our Purpose</h3>
        <p>
          At Indie Tunes, we believe music is more than just notes on a page;
          it's a powerful force for connection, discovery, and artistic
          expression. Our core purpose extends far beyond selling the latest
          albums. We're here to foster a thriving ecosystem for independent
          artists and the passionate music lovers who support them. We offer a
          platform to sell your music online, bypassing traditional gatekeepers
          and putting your sound directly in the ears of a global audience
          hungry for something fresh. But we don't stop there. We're invested in
          your success. We'll champion your music, providing promotional
          opportunities and connecting you with a community of like-minded
          artists and fans. We're not just a store; we're your launchpad, your
          biggest cheerleader, and your partner in getting your music
          discovered. Join us, and let's rewrite the rules of the music industry
          together.
        </p>
        <h3>Our Goals</h3>
        <p>
          Our goals are two-fold: empower artists and cultivate a thriving music
          community. We want to be the launchpad for independent voices,
          providing a platform to sell music online and reach a global audience.
          We'll equip you with the tools and resources you need, while fostering
          connections and collaboration among artists and fans. This journey is
          about igniting passionate music discovery, celebrating diverse genres,
          and reshaping the industry to be more artist-centric. Let's make music
          discovery a thrilling adventure, together.
        </p>
      </section>
    </div>
  );
};

export default about;
*/
