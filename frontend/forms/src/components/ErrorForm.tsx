import React from 'react'

function ErrorForm() {
  return (
    <div>
      <div className='grid h-screen px-4 bg-white place-content-center'>
        <div className='text-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 1024 768'
            className='w-auto h-56 mx-auto text-black sm:h-64'
          ></svg>

          <h1 className='mt-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            Uh-oh!
          </h1>

          <p className='mt-4 text-gray-500'>
            There was an error chargin the form, please refresh the page.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ErrorForm
