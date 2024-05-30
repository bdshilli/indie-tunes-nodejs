import { Outlet, Link } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";

const Layout = () => {
  return (
    <>
      <Header />
      <section class="margins">
        <Outlet />
      </section>
      <Footer />
    </>
  );
};

export default Layout;
