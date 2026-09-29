import { StudyStatus } from './study-status'
import { StudyTaxonomy } from './study-taxonomy'

export interface InternetStudyEntry {
  id: string
  url: string
  title: string
  status: StudyStatus
  taxonomy: StudyTaxonomy
  totalMinutes: number
  dateStarted: string
  dateLastDone: string
}