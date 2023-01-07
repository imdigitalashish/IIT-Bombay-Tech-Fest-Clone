


import React from 'react'


import styles from "./valueProp.module.css";


export default function ValuePropComponent() {
    return (
        <section className={styles.container}>


            <h2>What value we bring to you</h2>


            <div className={styles.container__Section}>
                <div className={styles.section__Left}>
                    <div className={styles.card}>
                        <img src="/assets/icons/graduated.png" alt="" />
                        <p>900+ Students Influenced</p>
                    </div>
                    <div className={styles.card}>
                        <img src="/assets/icons/tent.png" alt="" />
                        <p>400+ Bootcamp Participants</p>
                    </div>
                </div>
                <div className={styles.section__Right}>
                    <div className={styles.card}>
                        <img src="/assets/icons/employee.png" alt="" />
                        <p>7+ Speaker</p>
                    </div>
                    <div className={styles.card}>
                        <img src="/assets/icons/gift-box.png" alt="" />
                        <p>Many Other Perks</p>
                    </div>
                </div>
            </div>


        </section>
    )
}
