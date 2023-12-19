import React from "react";
import styles from "./Layout.module.scss";
import Footer from "../Footer/Footer";

export default function Layout({ children }) {
  return (
    <div className={styles.wrapper}>
      <main className={styles.layout}>{children} </main>
      <Footer />
    </div>
  );
}
