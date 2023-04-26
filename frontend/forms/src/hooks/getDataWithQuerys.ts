import useSWR, { Fetcher } from 'swr'

const fetcher: Fetcher = (...args: Parameters<typeof fetch>) =>
  fetch(...args).then((res) => res.json())

export default function useForms() {
  const { data, error, isLoading } = useSWR('/api/for?...', fetcher)

  return {
    data,
    error,
    isLoading,
  }
}
