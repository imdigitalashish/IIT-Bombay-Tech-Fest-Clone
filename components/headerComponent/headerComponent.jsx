




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

                    <div className={styles.registerNow}>
                        <button onClick={openNewUrl}>REGISTER NOW</button>
                    </div>

                    <div className="centerThis">
                        <p>SCROLL DOWN</p>
                    </div>

                </div>


            </div>

        </div>
    )
}
