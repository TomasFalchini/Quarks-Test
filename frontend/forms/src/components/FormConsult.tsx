import React from "react"
import SearchResultsCard from "./SearchResultsCard"

interface Props {
  data: Record<string, unknown>[]
}

function FormConsult({ data }: Props) {
  return (
    <div className="flex flex-col gap-4 bg-white p-4 mt-4 items-center">
      {data.length ? (
        <h2 className="font-bold text-2xl underline">Resultados:</h2>
      ) : (
        <h2 className="font-bold text-2xl text-center">
          No se han encontrado resultados
        </h2>
      )}
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
  )
}

export default FormConsult
