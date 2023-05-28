import Link from "next/link"
import React from "react"

interface Props {
  href: string
  content: string
  children: React.ReactNode
}

function NavBarButton({ href, content, children }: Props) {
  return (
    <Link href={href}>
      <button className="inline-flex items-center h-10 px-2 py-2 -mb-px text-center text-gray-700 bg-transparent border-b-2 border-transparent sm:px-4 -px-1  whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400">
        {children}
        <span className="mx-1 text-sm sm:text-base">{content}</span>
      </button>
    </Link>
  )
}

export default NavBarButton
