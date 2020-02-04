import React from 'react'
import { useSelector } from 'react-redux'

export default (props) => {
  const errors = useSelector(state => state.errors.artwork)

  return (
    <>
      {errors.length > 0 ? (
        <div className='from-errors'>
          {errors}
        </div>
      ) : (
        null
      )}
    </>
  )
}
