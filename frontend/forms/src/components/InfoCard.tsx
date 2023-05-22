import React from "react"

interface Props {
  title: string
  content: string
  children: React.ReactNode
}

function InfoCard({ title, content, children }: Props) {
  return (
    <div className="bg-gray-50 shadow-lg px-2 py-5 md:p-5 w-96 h-52 rounded">
      {children}
      <h1 className="mt-4 text-xl font-semibold text-gray-800">{title}</h1>
      <p className="mt-2 text-gray-500">{content}</p>
    </div>
  )
}

export default InfoCard
