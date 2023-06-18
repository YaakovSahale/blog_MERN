// import styles from "./App.module.css";

import Topbar from "./components/topbar/topbar";
import Login from "./screens/login/Login";
import Register from "./screens/register/Register";

function App() {
  return (
    <div>
      <Topbar />
      {/* <Login/> */}
      <Register/>
    </div>
  );
}

export default App;
