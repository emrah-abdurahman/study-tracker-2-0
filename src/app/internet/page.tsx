import InternetEntriesTable from '@/components/features/tables/internet-entries-table'
import InternetEntriesActionBar from '@/components/features/action-bars/internet-entries-actions-bar'

import styles from './internet.module.css'

export default function InternetTrackerGrid() {
  return (
    <section className={styles.dashboardInternet}>
      <InternetEntriesActionBar />
      <InternetEntriesTable />
    </section>
  )
}