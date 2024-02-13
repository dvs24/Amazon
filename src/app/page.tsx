import styles from "./page.module.css";
import Navbar from "./components/Navbar/Navbar";
import SubNavbar from "./components/SubNavbar/SubNavbar";
import HomePage from "./components/HomePage/HomePage"

export default function Home() {
  return (
    <div className={styles.amazon}>
      <Navbar />
      <SubNavbar />
      <HomePage />
    </div>
  );
}
