'use client'
import styles from "./page.module.css";
import Navbar from "./pages/Navbar";
import HomePage from "./pages/HomePage";
import { Provider } from "react-redux";
import {store} from "./redux/store.js"
import LogIn from "./pages/LogIn";
import Register from "./pages/Register";


export default function Home() {
  return (
    <Provider store={store}>

      <div className={styles.amazon}>
        {/* <Navbar /> */}
        {/* <HomePage /> */}
        {/* <LogIn/> */}
        <Register/>
      </div>
    </Provider>
  );
}
