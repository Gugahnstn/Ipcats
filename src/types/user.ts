import { FormEventHandler, ChangeEvent } from "react"

export interface Data {
  continent: string | undefined
  country: string | undefined
  reverse: string | undefined
  state: string | undefined
  query: string | undefined
  city: string | undefined
  flag: string | undefined
  lat: number | undefined
  lon: number | undefined
}
export interface ipSearchType {
  handleText: (event: ChangeEvent<HTMLInputElement>) => void
  handleSubmit: FormEventHandler<Element>
  search: string
  data: Data
}
