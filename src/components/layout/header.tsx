import styles from './header.module.css'

export default function Header() {
  return (<header className={styles.header}>
    <div className={styles.branding}>Study Tracker 2.0</div>
    <div className={styles.infoDisplay}>Information Display</div>
    <div className={styles.profileActions}>Profile</div>
  </header>)
}