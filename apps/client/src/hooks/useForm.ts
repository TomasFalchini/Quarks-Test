import { JsonSchema } from "@jsonforms/core"
import useSWR, { Fetcher } from "swr"

const fetcher: Fetcher<JsonSchema> = (...args: Parameters<typeof fetch>) =>
  fetch(...args).then((res) => res.json())

export default function useForms(formType: string) {
  const { data, error, isLoading } = useSWR<JsonSchema>(
    `http://localhost:8080/form/${formType}`,
    fetcher
  )

  return {
    data,
    error,
    isLoading,
  }
}
