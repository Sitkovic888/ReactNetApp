import React from 'react'
import './Card.css'

interface Props {
  companyName: string;
  ticker: string;
  price: number;
}

const Card: React.FC<Props> = ({ companyName, ticker, price }: Props): JSX.Element => {
  return (
    <div className='card'>
      <img src='https://www.unhcr.org/sites/default/files/legacy-images/626a9a044.jpg' alt='Image' />
      <div className='details'>
        <h2>{companyName} ({ticker})</h2>
        <p>${price}</p>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque aliquam mollitia expedita officia ipsam. Neque, impedit praesentium? Praesentium est consectetur et eius tenetur, beatae enim, rem aliquid temporibus dignissimos voluptatibus.</p>
    </div>
  )
}

export default Card;