


import React, { useRef, useEffect } from 'react'
import styles from "./IntroComponent.module.css"
export default function IntroComponent() {














    return (
        <div className={styles.container}>
            <video muted autoPlay loop>
                <source src="/assets/portal_video.webm" type="video/webm" />
            </video>

            <img src="/assets/portal.png" alt="" />


            <div className={styles.logoContainer}>
                <img src="/assets/winterludelogo.png" alt="" />
            </div>
        </div>
    )
}
