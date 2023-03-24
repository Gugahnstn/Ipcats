import { FormEventHandler, ChangeEvent } from "react"

export interface Data {
  continent: string | null
  country: string | null
  reverse: string | null
  state: string | null
  query: string | null
  city: string | null
  flag: string | null
  lat: string | null
  lon: string | null
}
export interface ipSearchType {
  handleText: (event: ChangeEvent<HTMLInputElement>) => void
  handleSubmit: FormEventHandler<Element>
  search: string
  data: Data
}
