import { StudyStatus } from './study-status'
import { StudyTaxonomy } from './study-taxonomy'

export interface InternetStudyEntry {
  id: number
  hostname: string
  url: string
  title: string
  status: StudyStatus
  taxonomy: StudyTaxonomy
  totalMinutes: number
  dateStarted: string
  dateLastDone: string
}