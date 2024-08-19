import { isAxiosError } from 'axios'
import { Dispatch } from 'redux'
import { setAppError } from '../../app/app-reducer.ts'

export const handleError = (e: unknown, dispatch: Dispatch) => {
  let errorMessage: string

  if (isAxiosError(e)) {
    errorMessage = e.response ? e.response.data.errorMessages[0].message : e.message
  } else {
    errorMessage = (e as Error).message
  }

  dispatch(setAppError(errorMessage))
}