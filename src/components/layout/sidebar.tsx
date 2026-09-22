import Link from 'next/link'

import styles from './sidebar.module.css'

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <nav>
        <ul>
          <li><Link href='/'>Home</Link></li>
          <li><Link href='/internet'>Internet</Link></li>
        </ul>
      </nav>
    </aside>
  )
}