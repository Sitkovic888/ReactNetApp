import React from 'react'
import { testIncomeStatementData } from './testData'

const data = testIncomeStatementData;

type Props = {}

type Company = (typeof data)[0];

const configs = [
  {
    label: 'Year',
    render: (company: Company) => company.acceptedDate,
  },
  {
    label: "Cost Of Revenue",
    render: (company: Company) => company.costOfRevenue,
  },
]

const Table = (props: Props) => {
  const tdClassName = 'p-4 whitespace-nowrap text-sm font-normal text-gray-900';
  const renderRows = data.map(c => {
    return (
      <tr key={c.cik}>
        {configs.map(v => {
          return (
            <td className={tdClassName}>{v.render(c)}</td>
          )
        })}
      </tr>
    )
  })

  const renderHeader = configs.map(c => {
    return (
      <th
        key={c.label}
        className='p-4 text-left text-xs font-medium text-fray-500 uppercase tracking-wider'
      >
        {c.label}
      </th>
    )
  })

  return (
    <div className='bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8'>
      <table>
        <thead className='min-w-full divide-y divide=gray-200 m-5'>
          {renderHeader}
        </thead>
        <tbody>{renderRows}</tbody>
      </table>
    </div>
  )
}

export default Table