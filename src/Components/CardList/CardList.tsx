import React from 'react'
import Card from '../Cards/Card'

type Props = {}

const CardList = (props: Props) => {
  return (
    <div>
        <Card companyName='Apple1' ticker='AAPL' price={1}/>
        <Card companyName='Apple2' ticker='AAPL' price={2}/>
        <Card companyName='Apple3' ticker='AAPL' price={3}/>
    </div>
  )
}

export default CardList;