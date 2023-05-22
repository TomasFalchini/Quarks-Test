"use client"
import useForms from "@/hooks/useForm"
import React, { useState } from "react"
import { JsonForms } from "@jsonforms/react"
import { materialRenderers, materialCells } from "@jsonforms/material-renderers"
import { generateDefaultUISchema } from "@jsonforms/core"
import LoadingFormSkeleton from "./LoadingFormSkeleton"
import axios from "axios"
import FormConsult from "./FormConsult"
import { BsArrowRight } from "react-icons/bs"
import { MdSend } from "react-icons/md"
import Button from "./Button"
import { errorToast } from "@/utils/errorToast"
import toast from "react-hot-toast"

function Form() {
  const { data: schema, error, isLoading } = useForms("A")
  const [data, setData] = useState({})
  const [result, setResult] = useState([])

  const sendForm = async () => {
    try {
      const result = await axios.post(`http://localhost:8080/form`, { ...data })
      toast.success("Se ha guardado con exito")
    } catch (err) {
      errorToast(err)
    }
  }

  const getDataWithQuerys = async () => {
    const queryString = Object.entries(data)
      .filter(([key, value]) => value !== undefined)
      .map(([key, value]) => {
        return `${key}=${value}`
      })
      .join("&")

    const response: any = await axios(
      `http://localhost:8080/form?${queryString}`
    )
    setResult(response.data)
  }
  if (error) {
    throw new Error("No se pudo cargar el formulario solicitado")
  }
  return (
    <div className="w-full flex flex-col items-center justify-center">
      {isLoading ? (
        <LoadingFormSkeleton />
      ) : (
        <div className="flex flex-col gap-5 w-full">
          <JsonForms
            schema={schema}
            uischema={schema && generateDefaultUISchema(schema)}
            data={data}
            renderers={materialRenderers}
            cells={materialCells}
            onChange={({ errors, data }) => setData(data)}
          />
          <div className="flex justify-around items-center w-full">
            <Button
              title="Enviar"
              onClickAction={sendForm}
              disabled={
                !schema?.required?.every((key) => key in data) ||
                Object.values(data).filter((el) => el !== undefined).length !==
                  schema?.required?.length
              }
            >
              <MdSend />
            </Button>

            <Button
              title="Buscar"
              onClickAction={getDataWithQuerys}
              disabled={
                !Object.values(data).filter((el) => el !== undefined).length
              }
            >
              <BsArrowRight />
            </Button>
          </div>
        </div>
      )}
      <div className="my-6">
        <FormConsult data={result} />
      </div>
    </div>
  )
}

export default Form
