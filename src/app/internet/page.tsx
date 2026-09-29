import { InternetEntriesTable } from '@/components/features/tables/internet-entries-table'
import styles from './internet.module.css'

export default function InternetTrackerGrid() {
  return (
    <section className={styles.dashboardInternet}>
      <InternetEntriesTable />
    </section>
  )
}