import React from 'react'
import { testIncomeStatementData } from './testData'

type Props = {
  config: any;
  data: any;
}

const Table = ({ config, data }: Props) => {
  const renderRows = data.map((company : any) => {
    return (
      <tr key={company.cik}>
        {config.map((v : any) => <td className='p-3'>{v.render(company)}</td>)}
      </tr>
    )
  })

  const renderHeader = config.map((c : any) => {
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
      <table className='min-w-full divide-y divide=gray-200 m-5'>
        <thead className='bg-gray-50'>{renderHeader}</thead>
        <tbody>{renderRows}</tbody>
      </table>
    </div>
  )
}

export default Table