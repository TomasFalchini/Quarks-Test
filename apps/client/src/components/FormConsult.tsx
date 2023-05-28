import React from "react"
import SearchResultsCard from "./SearchResultsCard"

interface Props {
  data: Record<string, unknown>[]
}

function FormConsult({ data }: Props) {
  return (
    <div className="flex flex-col w-full gap-4 p-4 mt-4 items-center">
      {data.length ? (
        <h2 className="font-bold text-2xl underline">Resultados:</h2>
      ) : (
        <h2 className="font-bold text-2xl text-center">
          No se han encontrado resultados
        </h2>
      )}
      <div className="flex-col flex w-full gap-4 items-center justify-center md:flex-row md:flex-wrap">
        {data.map((obj) => {
          const values = Object.entries(obj)
          return (
            <SearchResultsCard
              key={1}
              content={values}
            />
          )
        })}
      </div>
    </div>
  )
}

export default FormConsult
