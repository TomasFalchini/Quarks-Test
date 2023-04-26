import Image from 'next/image'

export default function Home() {
  return (
    <header className='bg-gray-900 pattern'>
      <div className='container px-6 mx-auto'>
        <nav className='flex flex-col py-6 sm:flex-row sm:justify-between sm:items-center'>
          <a href='#'>
            <Image
              className='w-auto h-6 sm:h-7'
              src='https://www.quarksalchemist.com/iso.svg'
              alt='Quarks Logo'
            />
          </a>
        </nav>

        <div className='flex flex-col items-center py-6 lg:h-[36rem] lg:flex-row'>
          <div className='lg:w-1/2'>
            <h2 className='text-3xl font-semibold text-gray-100 lg:text-4xl'>
              Quarks Alchemist
            </h2>

            <h3 className='mt-2 text-2xl font-semibold text-gray-100'>
              Hello <span className='text-blue-400'>Guest</span>
            </h3>

            <p className='mt-4 text-gray-100'>
              Bienvenido al challenge de Quarks, creado por Tomás Falchini.
            </p>
          </div>

          <div className='flex mt-8 lg:w-1/2 lg:justify-end lg:mt-0'>
            <div className='w-full max-w-md bg-white rounded-lg dark:bg-gray-800'>
              <div className='px-6 py-8 text-center'>
                <h2 className='text-2xl font-semibold text-gray-700 dark:text-white fo'>
                  Go To Form!
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
