import React from 'react'
import { ClipLoader } from 'react-spinners';
import './Spinner.css'

type Props = {
  isLoading?: boolean;
}

const Spinner = ({ isLoading = true }: Props) => {
  return (
    <>
      <div id='loading-spinner'>
        <ClipLoader
          color='#36d7b'
          loading={isLoading}
          size={35}
          aria-label='Loading Spinner'
          data-testId='loader'
        >
        </ClipLoader>
      </div>
    </>
  )
}

export default Spinner