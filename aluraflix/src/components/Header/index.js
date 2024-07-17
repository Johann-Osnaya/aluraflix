import styles from './Header.module.css'
const Header = () =>{
    return (
        <>
        <div className={styles.container}>
        <img src="./img/logo.png" alt="Logo aluraflix"/>
        <div className={styles.buttons}>
            <button className={styles.blueButton}>HOME</button>
            <button className={styles.whiteButton}>NUEVO VIDEO</button>
        </div>
        </div>
        </>
    )
} 
export default Header