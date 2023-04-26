'use client'
import useForms from '@/hooks/useForm'
import React, { useState } from 'react'
import { JsonForms } from '@jsonforms/react'
import { materialRenderers, materialCells } from '@jsonforms/material-renderers'
import { generateDefaultUISchema } from '@jsonforms/core'

function Form() {
  const { data: schema, error, isLoading } = useForms()

  const uischema = generateDefaultUISchema(schema)

  const [data, setData] = useState({})
  if (error) {
    throw new Error('No se pudo cargar el formulario solicitado')
  }
  return (
    <div>
      {isLoading ? (
        <>Loading...</>
      ) : (
        <JsonForms
          schema={schema}
          uischema={uischema}
          data={data}
          renderers={materialRenderers}
          cells={materialCells}
          onChange={({ errors, data }) => setData(data)}
        />
      )}
    </div>
  )
}

export default Form
