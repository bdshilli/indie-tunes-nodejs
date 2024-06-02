import "../styles/cart.css";
import "../styles/styles.css";
import ListSong from "../components/list-song";
import BoxAlbum from "../components/box-album";

const Cart = () => {
  return (
    <div id="cart">
      <h2>Cart</h2>
      <section class="columns">
        <div class="one">
          <div id="directory" class="columns wrap ">
            <BoxAlbum
              image={"bradley2.jpg"}
              title={"Don't Bully Me"}
              artist={"Brad"}
            />
            <BoxAlbum
              image={"bradley2.jpg"}
              title={"Don't Bully Me"}
              artist={"Brad"}
            />
            <BoxAlbum
              image={"bradley2.jpg"}
              title={"Don't Bully Me"}
              artist={"Brad"}
            />
            <BoxAlbum
              image={"bradley2.jpg"}
              title={"Don't Bully Me"}
              artist={"Brad"}
            />
            <BoxAlbum
              image={"bradley2.jpg"}
              title={"Don't Bully Me"}
              artist={"Brad"}
            />
            <BoxAlbum
              image={"bradley2.jpg"}
              title={"Don't Bully Me"}
              artist={"Brad"}
            />
            <BoxAlbum
              image={"bradley2.jpg"}
              title={"Don't Bully Me"}
              artist={"Brad"}
            />
          </div>
          <div>
            <ul id="song-list">
              <ListSong title={"hello"} artist={"nic"} length={"3:00"} />
              <ListSong title={"hello"} artist={"nic"} length={"3:00"} />
              <ListSong title={"hello"} artist={"nic"} length={"3:00"} />
              <ListSong title={"hello"} artist={"nic"} length={"3:00"} />
              <ListSong title={"hello"} artist={"nic"} length={"3:00"} />
              <ListSong title={"hello"} artist={"nic"} length={"3:00"} />
            </ul>
          </div>
        </div>
        <div id="payment" class="one">
          <ul>
            <li>
              <label for="text-email">Email:</label>
              <input type="text" id="text-email" />
            </li>
            <li>
              <label for="text-ccn">Credit Card Number:</label>
              <input type="text" id="text-ccn" />
            </li>
            <li>
              <label for="text-ccv">CCV:</label>
              <input type="text" id="text-ccv" />
            </li>
            <li>
              <label for="text-date">Expiration Date:</label>
              <input type="text" id="text-date" />
            </li>
            <li>
              <button id="buy">Buy</button>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Cart;
