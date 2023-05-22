import React from "react"
import InfoCard from "./InfoCard"
import { HiOutlineDocumentSearch } from "react-icons/hi"
import { TfiWrite } from "react-icons/tfi"

function FormSection() {
  return (
    <section className="bg-transparent mb-10">
      <div className="container  px-4 md:px-12 pt-12 pb-3 mx-auto flex flex-col md:flex-row gap-12 lg:gap-30 justify-around items-center">
        <InfoCard
          title="Complete el formulario"
          content="Complete el formulario con los campos solicitados, y guardelos en
              la base de datos."
        >
          <HiOutlineDocumentSearch className="w-8 h-8" />
        </InfoCard>
        <InfoCard
          title="Consulte por los datos guardados"
          content="Consulte los datos ya registrados, a traves de los mismos campos del
            formulario anterior"
        >
          <TfiWrite className="w-8 h-8" />
        </InfoCard>
      </div>
    </section>
  )
}

export default FormSection
