import { Outlet } from "react-router";
import Footer from "../../components/client/Footer/Footer";
import Navbar from "../../components/client/Navbar/Navbar";

const UserLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto px-8 py-12 h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default UserLayout;
