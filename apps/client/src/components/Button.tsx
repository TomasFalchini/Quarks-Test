"use client"
import React from "react"

interface Props {
  onClickAction: () => void
  title: string
  children: React.ReactNode
  disabled?: boolean
}

function Button({ children, title, onClickAction, disabled }: Props) {
  return (
    <button
      disabled={disabled}
      onClick={onClickAction}
      className={`group relative inline-flex items-center overflow-hidden rounded bg-indigo-600 px-8 py-3 text-white focus:outline-none focus:ring active:bg-indigo-500 disabled:bg-gray-400 disabled:text-gray-800`}
    >
      <span className="absolute -end-full transition-all group-hover:end-4">
        {children}
      </span>

      <span className="text-sm font-medium transition-all group-hover:me-4">
        {title}
      </span>
    </button>
  )
}

export default Button
