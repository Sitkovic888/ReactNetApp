import React, { SyntheticEvent } from 'react'
import { symbolName } from 'typescript'

interface Props {
    onPortfolioCreate: (e: SyntheticEvent) => void;
    symbol: string;
}

const AddPortfolio = ({onPortfolioCreate, symbol}: Props) => {
  return (
    <form onSubmit={onPortfolioCreate}>
        <input readOnly={true} hidden={true} value={symbol} />
        <button type='submit'>Add</button>
    </form>
  )
}

export default AddPortfolio