import React, { useEffect, useState } from 'react'
import FooterComponent from '../components/footer/FooterComponent';
import HeaderComponent from '../components/headerComponent/headerComponent';
import OurCommunityComponent from '../components/ourCommunity/OurCommunityComponent';
import IntroComponent from '../components/overlayintro/IntroComponent';
import ValuePropComponent from '../components/valueProposition/valuePropComponent';


import styles from "../styles/Home.module.css";

export default function MainScreen() {





  let [loading, setLoading] = useState(true);

  useEffect(() => {


    setTimeout(() => {
      setLoading(false)
    }, 2000)


  })



  if (loading) {

    return (
      <div className={styles.container}>

        <IntroComponent />
      </div>
    )
  }

  return (
    <div className={styles.container}>

      <HeaderComponent />
      <ValuePropComponent />
      <OurCommunityComponent />
      <FooterComponent />
    </div>
  )


}
