import { Route, Routes } from "react-router-dom";
import Topbar from "./components/topbar/Topbar";
import Login from "./screens/login/Login";
import Register from "./screens/register/Register";
import Home from "./screens/home/Home";
import Single from "./screens/single/Single";
import Contact from "./screens/contact/Contact";
import About from "./screens/about/About";
import Write from "./screens/write/Write";
import { useContext } from "react";
import { Context } from "./context/Context";
import Settings from "./screens/settings/Settings";
import ErrorPage from "./screens/errorPage/ErrorPage";
import styles from "./app.module.css";
import AppRoutes from "./utils/AppRoutes";

function App() {
  const { user } = useContext(Context);

  return (
    <div className={styles.app}>
      <Topbar />
      <AppRoutes />
    </div>
  );
}

export default App;
