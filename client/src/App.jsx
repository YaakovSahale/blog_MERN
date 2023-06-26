// import styles from "./App.module.css";

import { Route, Routes } from "react-router-dom";
import Topbar from "./components/topbar/topbar";
import Login from "./screens/login/Login";
import Register from "./screens/register/Register";
import Home from "./screens/home/Home";
import Single from "./screens/single/Single";
import Contact from "./screens/contact/Contact";
import About from "./screens/about/About";
import Write from "./screens/write/Write";
import Settings from "./screens/setting/Settings";
import ErrorPage from "./screens/errorPage/ErrorPage";

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
        <Route path="/post/:postId" element={<Single />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
      
    </div>
  );
}

export default App;
