import styles from './page.module.css';
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/HomePage/HomePage"

export default function Home() {
  return (
    <div className={styles.amazon}>
      <Navbar />
      <HomePage />
    </div>
  );
}
