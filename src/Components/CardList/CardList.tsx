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
          return (
            <Card
              id={result.symbol}
              key={uuid()}
              searchResult={result}
              onPortfolioCreate={onPortfolioCreate} />
          )
        })
      ) : (
        <p className="mb-3 mt-3 text-xl font-semibold text-center md:text-xl">
          No results!
        </p>)
      }
    </>
  )
}

export default CardList;