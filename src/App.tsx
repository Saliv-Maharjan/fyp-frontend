import { Route, Routes } from "react-router";
import Home from "./pages/UserPage/Home/Home";
import UserLayout from "./layouts/UserLayout/UserLayout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
