import React from "react"
import NavBarButton from "./NavBarButton"
import { FaWpforms } from "react-icons/fa"
import { TbBrandGoogleHome } from "react-icons/tb"

function NavBar() {
  return (
    <div className="flex fixed z-10 bg-white w-screen overflow-x-auto overflow-y-hidden border-b border-gray-200 whitespace-nowrap">
      <NavBarButton
        content="Home"
        href="/"
      >
        <TbBrandGoogleHome className="w-4 h-4 mx-1 sm:w-6 sm:h-6" />
      </NavBarButton>
      <NavBarButton
        href="/formpage"
        content="Forms"
      >
        <FaWpforms className="w-4 h-4 mx-1 sm:w-6 sm:h-6" />
      </NavBarButton>
    </div>
  )
}

export default NavBar
