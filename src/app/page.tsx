'use client'
import styles from "./page.module.css";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/HomePage/HomePage";
import { Provider } from "react-redux";
import {store} from "./redux/store.js"


export default function Home() {
  return (
    <Provider store={store}>

      <div className={styles.amazon}>
        <Navbar />
        <HomePage />
      </div>
    </Provider>
  );
}
