import React from 'react'
import loading from './spinner.gif'

// For showing loading gif during load timings

function Spinner() {
  return (
    <div className='container text-center'>
      <img src={loading} alt={loading} height="130px" width="140px" />
    </div>
  )
}

export default Spinner
