import React from "react"
import NavBarButton from "./NavBarButton"
import { FaWpforms } from "react-icons/fa"
import { TbBrandGoogleHome } from "react-icons/tb"

function NavBar() {
  return (
    <div className="flex h-12 items-center fixed z-10 bg-white w-screen overflow-x-auto overflow-y-hidden border-b border-gray-200 whitespace-nowrap">
      <div className="group">
        <NavBarButton
          content="Home"
          href="/"
        >
          <TbBrandGoogleHome className="w-4 h-4 mx-1 sm:w-6 sm:h-6 group-hover:origin-top-left group-hover:-rotate-6 group-hover:text-sky-900 group-hover:scale-[1.05] transition-all duration-100 ease-in-out" />
        </NavBarButton>
      </div>
      <div className="group">
        <NavBarButton
          href="/formpage"
          content="Forms"
        >
          <FaWpforms className="w-4 h-4 mx-1 sm:w-6 sm:h-6 group-hover:origin-top-left group-hover:-rotate-6 group-hover:text-sky-900 group-hover:scale-[1.05] transition-all duration-100 ease-in-out" />
        </NavBarButton>
      </div>
    </div>
  )
}

export default NavBar
