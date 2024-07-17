import styles from './Banner.module.css'
const Banner = () => {
    return (
        <>
        <div className={styles.container}>
            <div className={styles.label}>
                <div className={styles.blueLabel}>
                    <h1 className={styles.blueLabelText}>FRONT END</h1>
                </div>
                <div className={styles.descriptionContainer}>
                <h1 className={styles.challenge}>Challenge React</h1>
                <p className={styles.description}>Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</p>
                </div>
            </div>
            <iframe className={styles.video} width="640" height="333" src="https://www.youtube.com/embed/ov7vA5HFe6w?si=b-PtoUlVRTEwlKMD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        </>
    )
}

export default Banner;