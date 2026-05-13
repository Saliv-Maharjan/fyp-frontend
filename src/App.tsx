import { Route, Routes } from "react-router";
import UserLayout from "./layouts/UserLayout";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ListUsers from "./pages/ListUsers";
import UserForm from "./pages/UserForm";

function App() {
  return (
    <>
      {/* User */}
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/list-users" element={<ListUsers />} />
          <Route path="/user-form" element={<UserForm />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
