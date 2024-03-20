import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

function UserLayout() {
  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto">
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default UserLayout;
