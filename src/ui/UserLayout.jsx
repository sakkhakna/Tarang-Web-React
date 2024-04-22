import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

function UserLayout({ children }) {
  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto">{children}</main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default UserLayout;
