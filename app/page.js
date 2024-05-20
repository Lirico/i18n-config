import Image from "next/image";
import styles from "./page.module.css";
import LanguageButton from "./components/LanguageButton";

export default function Home() {
  return (
    <main className={styles.main}>
      <LanguageButton />
    </main>
  );
}
