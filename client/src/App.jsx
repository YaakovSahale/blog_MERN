// import styles from "./App.module.css";

import { Route, Routes } from "react-router-dom";
import Topbar from "./components/topbar/topbar";
import Login from "./screens/login/Login";
import Register from "./screens/register/Register";
import Home from "./screens/home/Home";
import SinglePost from "./components/singlePost/SinglePost";
import Contact from "./screens/contact/Contact";
import About from "./screens/about/About";
import Write from "./screens/write/Write";
import Settings from "./screens/setting/Settings";

function App() {
  const user = false;
  // const user = true;
  return (
    <div>
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/write" element={user ? <Write /> : <Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/settings" element={user ? <Home /> : <Settings />} />
        <Route path="/post/:postId" element={<SinglePost />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
