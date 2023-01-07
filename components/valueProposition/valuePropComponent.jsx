


import React, { useEffect, useRef, useState } from 'react'


import styles from "./valueProp.module.css";

import GroupsIcon from '@mui/icons-material/Groups';
import FestivalIcon from '@mui/icons-material/Festival';
import PersonIcon from '@mui/icons-material/Person';
import DirectionsRailwayIcon from '@mui/icons-material/DirectionsRailway';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import useOnScreen from '../../utils/onScreenHook';
export default function ValuePropComponent() {


    let handleScroll = (e) => {
        console.log(e);
    }

    const containerRef = useRef()

    const isVisibleHook = useOnScreen(containerRef);


    useState(() => {
        console.log(isVisibleHook);
    }, [isVisibleHook])


    return (
        <section ref={containerRef} className={styles.container}>


            <h2>What value we bring to you</h2>


            <div className={styles.container__Section}>
                <div className={styles.card}>
                    <GroupsIcon />
                    <p className={styles.attendees}></p>
                </div>
                <div className={styles.card}>
                    <PersonIcon />
                    <p className={styles.speakers}></p>
                </div>
                <div className={styles.card}>
                    <DirectionsRailwayIcon />
                    <p className={styles.track}>2 Tracks</p>
                </div>
                <div className={styles.card}>
                    <CardGiftcardIcon />
                    <p className={styles.studentImpact}></p>
                </div>
            </div>


        </section>
    )
}
