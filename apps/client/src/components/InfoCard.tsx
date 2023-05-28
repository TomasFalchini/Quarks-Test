import React from "react"

interface Props {
  title: string
  content: string
  children: React.ReactNode
}

function InfoCard({ title, content, children }: Props) {
  return (
    <div className="bg-gray-50 shadow-lg hover:scale-[1.05] hover:shadow-2xl hover:-translate-y-2 transition-all duration-100 linear px-2 py-5 md:p-10 w-fit max-h-fit rounded-lg">
      {children}
      <h1 className="mt-4 text-xl font-semibold text-gray-800">{title}</h1>
      <p className="mt-2 text-gray-500">{content}</p>
    </div>
  )
}

export default InfoCard
