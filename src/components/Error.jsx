import React from 'react'

function Error() {
  return (
    <div className='bg-red-500 self-center text-white  text-center rounded-md border-2 border-red-700 py-10 px-6 md:py-6 md:px-4 box-shadow'>
        <h1 className='text-2xl font-text2 capitalize'>There is an error while loading the data</h1>
        <p className='text-red-100 capitalize'>Please check your internet connecetion <br />or Refresh the page to try again</p>
    </div>
  )
}

export default Error