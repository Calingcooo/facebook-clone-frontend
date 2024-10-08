import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Layout = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <div className="flex flex-col min-w-screen min-h-screen bg-gray-100">
      {isLoggedIn && <Header />}
      <main className="flex flex-grow justify-center">
        <Outlet />
      </main>
      {!isLoggedIn && <Footer />}
    </div>
  );
};

export default Layout;
