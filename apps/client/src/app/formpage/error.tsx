'use client'

import ErrorForm from '@/components/ErrorForm'

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  return (
    <div>
      <ErrorForm />
      <button onClick={() => reset()}>Try again</button>
    </div>
  )
}
