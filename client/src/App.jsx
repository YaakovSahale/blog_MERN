import { Route, Routes } from "react-router-dom";
import Topbar from "./components/topbar/Topbar";
import Login from "./screens/login/Login";
import Register from "./screens/register/Register";
import Home from "./screens/home/Home";
import Single from "./screens/single/Single";
import Contact from "./screens/contact/Contact";
import About from "./screens/about/About";
import Write from "./screens/write/Write";
import Settings from "./screens/settings/Settings";
import ErrorPage from "./screens/errorPage/ErrorPage";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
  const { user } = useContext(Context);

  return (
    <div>
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/write" element={<Write />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/settings" element={user ? <Settings /> : <Home />} />
        <Route path="/post/:postId" element={<Single />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
