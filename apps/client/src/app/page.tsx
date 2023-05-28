import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <header className="bg-gray-900 h-screen">
      <div className="container w-full px-6 mx-auto">
        <nav className="flex flex-col py-6 sm:flex-row sm:justify-between sm:items-center">
          <Image
            className="w-auto mt-12 h-12 sm:h-12"
            src="https://www.quarksalchemist.com/iso.svg"
            alt="Quarks Logo"
            width={30}
            height={40}
          />
        </nav>

        <div className="flex flex-col items-center justify-start py-6 lg:h-[36rem] lg:flex-row">
          <div className="lg:w-1/2 z-50 mb-5">
            <h2 className="pl-3 font-bold tracking-wider leading-[4rem] xl:leading-[8.5rem] text-4xl md:text-6xl xl:text-8xl bg-clip-text text-transparent bg-gradient-to-br from-pink-500 via-indigo-500 to-sky-600">
              Quarks Alchemist
            </h2>

            <h3 className="pl-5 mt-2 text-xl md:text-4xl font-semibold text-gray-100">
              Bienvenido <span className="text-blue-400">invitado</span>
            </h3>

            <p className="pl-6 mt-4 font-bold text-lg md:text-2xl text-gray-100">
              Bienvenido al challenge de Quarks, creado por Tomás Falchini.
            </p>
          </div>
          <div className="w-1/2 flex items-center justify-center scale-[0.65] md:scale-[0.85] lg:scale-100">
            <Link href="/formpage">
              <div className="z-10 w-full transition-all duration-300 linear max-w-md bg-white rounded-lg hover:bg-gradient-to-r hover:from-pink-500 hover:via-indigo-500 hover:to-sky-600 ">
                <div className="px-4 py-6 text-center ">
                  <h2 className="text-2xl tracking-wider font-semibold text-gray-700 hover:text-white">
                    Ve al formulario!
                  </h2>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
