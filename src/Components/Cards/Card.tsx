import React from 'react'
import './Card.css'

interface Props {
  companyName: string;
  ticker: string;
  price: number;
}

const Card = ({ companyName, ticker, price }: Props) => {
  return (
    <div className='card'>
      <img src='https://addons.mozilla.org/user-media/previews/full/192/192605.png?modified=1622132519' alt='Image' />
      <div className='details'>
        <h2>{companyName} ({ticker})</h2>
        <p>${price}</p>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque aliquam mollitia expedita officia ipsam. Neque, impedit praesentium? Praesentium est consectetur et eius tenetur, beatae enim, rem aliquid temporibus dignissimos voluptatibus.</p>
    </div>
  )
}

export default Card;