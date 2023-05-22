import { AxiosError } from "axios"
import toast from "react-hot-toast"

export function errorToast(error: unknown): void {
  if (error instanceof AxiosError) {
    toast.error(error.response?.data.message)
  } else if (error instanceof Error) {
    toast.error(error.message)
  }
}
