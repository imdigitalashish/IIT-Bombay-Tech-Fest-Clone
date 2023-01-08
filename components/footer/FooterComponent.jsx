import React from 'react'


import styles from "./FooterComponent.module.css";


export default function FooterComponent() {
    return (
        <div className={styles.container}>
            <div className={styles.overLay}></div>
            <div>
                <div className="centerThis">

                    <img src="/assets/headerlogo.png" alt="" />
                </div>
                <p><a style={{textDecoration: "none", color: "white"}} href="https://www.linkedin.com/in/imdigitalashish/">Made with {"❤️"} By <span style={{color: "red"}}>Ashish Kumar Verma</span> and <span style={{color: "violet"}}>GDSC Team</span></a> </p>

            </div>
        </div>
    )
}
