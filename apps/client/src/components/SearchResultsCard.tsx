import React from "react"
import { GrContactInfo } from "react-icons/gr"

interface Props {
  content: [string, unknown][]
}

function SearchResultsCard({ content }: Props) {
  return (
    <div className="w-96 rounded-xl border border-gray-200 bg-white p-8 m-4 flex flex-col items-start bg-gray-50 shadow-lg hover:scale-[1.05] hover:shadow-2xl hover:-translate-y-2 transition-all duration-100 linear">
      <GrContactInfo className="self-center scale-[2] mb-2" />
      {content.map(([key, value]) => {
        return (
          <div
            className="flex w-full justify-evenly"
            key={key}
          >
            <h2 className="text-xl text-start w-1/2 font-semibold underline text-sky-900 capitalize">
              {key}
            </h2>
            <h4 className="text-lg text-start w-1/2 font-base text-slate-800">
              {value as string}
            </h4>
          </div>
        )
      })}
    </div>
  )
}

export default SearchResultsCard
