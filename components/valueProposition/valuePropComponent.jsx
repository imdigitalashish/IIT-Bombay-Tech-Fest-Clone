


import React, { useEffect, useRef, useState } from 'react'


import styles from "./valueProp.module.css";

import GroupsIcon from '@mui/icons-material/Groups';
import FestivalIcon from '@mui/icons-material/Festival';
import PersonIcon from '@mui/icons-material/Person';
import DirectionsRailwayIcon from '@mui/icons-material/DirectionsRailway';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import useOnScreen from '../../utils/onScreenHook';
import { useInView, InView } from 'react-intersection-observer';
export default function ValuePropComponent() {




    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0.5,
    });


    let [animationPlayed, setAnimationPlayed] = useState(false);

    let cardRef = useRef(0);

    useEffect(() => {
        if (!animationPlayed) {
            if (inView) {

                let elements = (document.querySelectorAll(`.${styles.card}`));
                elements.forEach(elem => {
                    elem.classList.toggle(styles.cardAnimation)
                })
                setAnimationPlayed(true);
            }
        }
    }, [inView])

    return (
        // <InView>
        // {({ inView, ref, entry }) => (
        <section ref={ref} className={styles.container}>


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
        // )}
        // </InView>
    )

    return (
        <InView>
            {({ inView, containerRef, entry }) => (
                <section ref={containerRef} className={styles.container}>
                    <h2>{`Header inside viewport ${inView}.`}</h2>


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
            )}
        </InView>

    )
}
