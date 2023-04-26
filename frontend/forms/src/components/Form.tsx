'use client'
import useForms from '@/hooks/useForm'
import React, { useState } from 'react'
import { JsonForms } from '@jsonforms/react'
import { materialRenderers, materialCells } from '@jsonforms/material-renderers'
import { generateDefaultUISchema } from '@jsonforms/core'
import Button from './Button'

function Form() {
  const { data: schema, error, isLoading } = useForms()

  const uischema = generateDefaultUISchema(schema)

  const getDataWithQuerys = () => {}

  const sendForm = () => {}

  const [data, setData] = useState({})
  if (error) {
    throw new Error('No se pudo cargar el formulario solicitado')
  }
  return (
    <div>
      {isLoading ? (
        <>Loading...</>
      ) : (
        <div>
          <JsonForms
            schema={schema}
            uischema={uischema}
            data={data}
            renderers={materialRenderers}
            cells={materialCells}
            onChange={({ errors, data }) => setData(data)}
          />
          <Button
            onClickAction={}
            label='Send Form'
          />
          <Button
            onClickAction={}
            label='Get Data'
          />
        </div>
      )}
    </div>
  )
}

export default Form
