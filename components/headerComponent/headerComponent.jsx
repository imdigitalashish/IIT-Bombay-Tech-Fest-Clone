




import React from 'react'


import styles from "./headerComponent.module.css"


export default function HeaderComponent() {





    let openNewUrl = () => {
        window.open("https://www.commudle.com/communities/dsc-iiitd/events/winterlude")
    }



    return (
        <div className={styles.container}>

            <nav>

                <div className="centerThis">
                    <img className={styles.headerImage} src="/assets/headerlogo.png" alt="" />
                </div>

            </nav>

            <div className={styles.landingSection}>
                <div>

                    <div className={styles.tagLine}>
                        <img src="/assets/taglinelogo.png" alt="" />
                    </div>

                    <p className={styles.registerInfo}>
                        Date: 5 Feb 2022 | Venue: IIIT Delhi
                    </p>

                    <div className={styles.registerNow}>
                        <button onClick={openNewUrl}>REGISTER NOW</button>
                    </div>
                    <p className={styles.aboutEvent}>
                        As we say, Winterlude is where developers can tech a day off! We plan
                        to help like-minded people connect, interact and learn, by exposing
                        them to all things' technology through our amazing speaker lineup and
                        activities. The two tracks for the day, Augment and Envision, are
                        designed to help attendees explore the two major aspects of
                        technology. Augment is about using existing resources and
                        knowledge to build something impactful, while Envision is about
                        accomplishing groundbreaking advancements in technology, to
                        achieve things in a bigger and better way. Throughout the day, the
                        attendees can listen to keynote speeches from industry professionals,
                        engage in activities planned by our sponsors, build and nurture
                        student networks, and have fun along the way!
                    </p>
                    <div className="centerThis">
                        <p className={styles.scroll}>SCROLL DOWN</p>
                    </div>

                </div>


            </div>

        </div>
    )
}
