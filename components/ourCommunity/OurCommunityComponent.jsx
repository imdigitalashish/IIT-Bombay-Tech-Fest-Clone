import React from 'react'
import Slider from 'react-slick';


import styles from "./OurCommunity.module.css";


export default function OurCommunityComponent() {




    return (
        <section className={styles.container}>
            <h2>Our Community, GDSC</h2>
            <p>Google Developer Student Clubs (GDSC) are university-based tech community groups. </p>


            <div className={styles.carousel}>

                <div className={styles.card}>
                    <img src="/assets/webdevbootcamp.jpg" alt="" />
                    <p>Tech Enthusiasts</p>
                </div>
                <div className={styles.card}>
                    <img src="/assets/webdevbootcamp.jpg" alt="" />
                    <p>Tech Enthusiasts</p>
                </div>

                <div className={styles.card}>
                    <img src="/assets/webdevbootcamp.jpg" alt="" />
                    <p>Tech Enthusiasts</p>
                </div>
                <div className={styles.card}>
                    <img src="/assets/webdevbootcamp.jpg" alt="" />
                    <p>Tech Enthusiasts</p>
                </div>
                <div className={styles.card}>
                    <img src="/assets/webdevbootcamp.jpg" alt="" />
                    <p>Tech Enthusiasts</p>
                </div>
                <div className={styles.card}>
                    <img src="/assets/webdevbootcamp.jpg" alt="" />
                    <p>Tech Enthusiasts</p>
                </div>
                

            </div>


        </section>
    )
}
