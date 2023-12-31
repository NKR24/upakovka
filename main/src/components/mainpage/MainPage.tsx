import styles from "./styles.module.scss"
import clsx from "clsx";

export default function MainPage() {
    return (
        <>
            <div class={styles.containerMain}>
                <div class={styles.containerSection}>
                    <div class={styles.upakovka}>
                        <h1 class={styles.up}>UP</h1>
                        <h1 class={styles.akovka}>AKOVKA</h1>
                    </div>
                    <div class={styles.info}>
                        <div class={clsx(styles.box, styles.One)}>
                            <p class={styles.text}>Свечи</p>
                        </div>
                        <div class={clsx(styles.box, styles.Two)}>
                            <p class={styles.text}>Свечи</p>
                        </div>
                    </div>
                    <div class={styles.project}>
                        <p class={styles.textProject}>запросить проект</p>
                    </div>
                    <div class={styles.final}>
                        <p class={styles.textFinal}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore</p>
                    </div>
                </div>
            </div>
        </>
    )
}