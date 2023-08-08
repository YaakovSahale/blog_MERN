import Topbar from "./components/topbar/Topbar";
import AppRoutes from "./utils/AppRoutes";

import styles from "./app.module.css";
import BurgerNav from "./components/burgerNav/BurgerNav";


function App() {


  return (
    <div className={styles.app}>
      <BurgerNav/>
      <Topbar />
      <AppRoutes />
    </div>
  );
}

export default App;
