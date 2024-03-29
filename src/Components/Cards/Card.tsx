import React, { SyntheticEvent } from 'react'
import './Card.css'
import { CompanySearch } from '../../company';
import AddPortfolio from '../Portfolio/AddPortfolio/AddPortfolio';

interface Props {
  id: string;
  searchResult: CompanySearch;
  onPortfolioCreate: (e: SyntheticEvent) => void;
}

const Card: React.FC<Props> = ({ searchResult, onPortfolioCreate }: Props): JSX.Element => {
  const symbol = searchResult.symbol;

  return (
    <div className='card'>
      <img alt='Logo' />
      <div className='details'>
        <h2>{searchResult.name} ({symbol})</h2>
        <p>${searchResult.currency}</p>
      </div>
      <p>
        {searchResult.exchangeShortName} - {searchResult.stockExchange}
      </p>
      <AddPortfolio onPortfolioCreate={onPortfolioCreate} symbol={symbol}/>
    </div>
  )
}

export default Card;