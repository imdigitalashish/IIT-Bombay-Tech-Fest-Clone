import React from 'react'
import IntroComponent from '../components/overlayintro/IntroComponent';


import styles from "../styles/Home.module.css";

export default function MainScreen() {
  return (
    <div className={styles.container}>

      <IntroComponent />

    </div>
  )
}
