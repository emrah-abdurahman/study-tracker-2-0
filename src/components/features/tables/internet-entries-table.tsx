'use client'

import { createColumnHelper, tableFeatures, useTable } from '@tanstack/react-table'

import { InternetStudyEntry } from '@/types/internet-study-entry'

const data: Array<InternetStudyEntry> = [
  { id: '1', url: 'https://tanstack.com/table/latest/docs/framework/react/quick-start', title: 'Quick Start | TanStack Table React Docs', status: 'In Progress', taxonomy: { domain: 'Software Engineering', category: 'Web Development', subCategory: 'Frontend Libraries', subject: 'TanStack Table' }, totalMinutes: 60, dateStarted: new Date(2026, 0, 1).toISOString(), dateLastDone: new Date().toISOString() },
  { id: '2', url: 'https://www.freecodecamp.org/learn/python-v9/lecture-understanding-inheritance-and-polymorphism/what-is-name-mangling-and-how-does-it-work', title: 'Understanding Inheritance and Polymorphism - What is Name Mangling and How Does it Work? | Learn | freeCodeCamp.org', status: 'In Progress', taxonomy: { domain: 'Software Engineering', category: 'Software Development', subCategory: 'Programming Languages', subject: 'Python' }, totalMinutes: 60, dateStarted: new Date(2026, 0, 1).toISOString(), dateLastDone: new Date().toISOString() }
]

const features = tableFeatures({})

const columnHelper = createColumnHelper<typeof features, InternetStudyEntry>()
const columns = columnHelper.columns([
  columnHelper.accessor('id', { header: 'ID' }),
  columnHelper.accessor('url', { header: 'URL', cell: (row) => <a href={row.getValue()} target='_blank'>{row.getValue()}</a> }),
  columnHelper.accessor('title', { header: 'Title' }),
  columnHelper.accessor('status', { header: 'Status' }),
  columnHelper.accessor('taxonomy.domain', { header: 'Domain' }),
  columnHelper.accessor('taxonomy.category', { header: 'Category' }),
  columnHelper.accessor('taxonomy.subCategory', { header: 'Sub-Category' }),
  columnHelper.accessor('taxonomy.subject', { header: 'Subject' }),
  columnHelper.accessor('dateStarted', { header: 'Date Started', cell: (row) => new Date(row.getValue()).toLocaleString() }),
  columnHelper.accessor('dateLastDone', { header: 'Date Last Done', cell: (row) => new Date(row.getValue()).toLocaleString() })
])

export function InternetEntriesTable() {
  const table = useTable({ features, columns, data })

  return (
    <table>
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id}>
                {header.isPlaceholder ? null : (
                  <table.FlexRender header={header} />
                )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getAllCells().map((cell) => (
              <td key={cell.id}>
                <table.FlexRender cell={cell} />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}