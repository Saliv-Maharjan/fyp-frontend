import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const UserLayout = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen p-8">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default UserLayout;
