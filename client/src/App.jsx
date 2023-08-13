import Topbar from "./components/topbar/Topbar";
import AppRoutes from "./utils/AppRoutes";
import BurgerNav from "./components/burgerNav/BurgerNav";
import styles from "./app.module.css";


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
