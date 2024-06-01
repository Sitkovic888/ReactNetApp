import React, { SyntheticEvent } from 'react'
import Card from '../Cards/Card'
import { CompanySearch } from '../../company'
import { v4 as uuid } from "uuid"

interface Props {
  searchResult: CompanySearch[];
  onPortfolioCreate: (e: SyntheticEvent) => void;
}

const CardList: React.FC<Props> = ({ searchResult, onPortfolioCreate }: Props): JSX.Element => {
  return (
    <>
      {searchResult.length > 0 ? (
        searchResult.map((result) => {
          return <Card
            id={result.symbol}
            key={uuid()}
            searchResult={result}
            onPortfolioCreate={onPortfolioCreate} />;
        })
      ) : (<h1>No results</h1>)
      }
    </>
  )
}

export default CardList;