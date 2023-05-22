import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <header className="bg-gray-900 h-screen">
      <div className="container px-6 mx-auto">
        <nav className="flex flex-col py-6 sm:flex-row sm:justify-between sm:items-center">
          <Image
            className="w-auto mt-12 h-12 sm:h-12"
            src="https://www.quarksalchemist.com/iso.svg"
            alt="Quarks Logo"
            width={30}
            height={40}
          />
        </nav>

        <div className="flex flex-col items-center justify-evenly py-6 lg:h-[36rem] lg:flex-row">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-semibold text-gray-100 lg:text-4xl">
              Quarks Alchemist
            </h2>

            <h3 className="mt-2 text-2xl font-semibold text-gray-100">
              Bienvenido <span className="text-blue-400">invitado</span>
            </h3>

            <p className="mt-4 text-gray-100">
              Bienvenido al challenge de Quarks, creado por Tomás Falchini.
            </p>
          </div>

          <div className="flex mt-8 lg:w-1/2 scale-[0.65] lg:scale-100 lg:justify-end lg:mt-0">
            <Link href="/formpage">
              <div className="w-full max-w-md bg-white rounded-lg ¿">
                <div className="px-6 py-8 text-center">
                  <h2 className="text-2xl font-semibold text-gray-700  fo">
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
