import styles from "./styles.module.scss"
import clsx from "clsx";

export default function MainPage(){
    return(
        <>
            <div class={styles.containerMain}>
                <div class={styles.upakovka}>
                    <h1 class={styles.PartOne}>UP</h1>
                    <h1 class={styles.PartTwo}>AKOVKA</h1>
                </div>
                <div class={styles.info}>
                    <div class={clsx(styles.box, styles.One)}>
                        <p class={styles.text}>Свечи</p>
                    </div>
                    <div class={clsx(styles.box, styles.Two)}>
                        <p class={styles.text}>Свечи</p>
                    </div>
                </div>
            </div>
        </>
    )
}