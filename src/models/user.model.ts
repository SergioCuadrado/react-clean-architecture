import { type Roles } from '.'

export interface User {
  id: string
  name: string
  email: string
  role: Roles
}

export interface ApiUser {
  id: string
  name: string
  status: string
  species: string
  type: string
  gender: string
  image: string
  episode: string[]
  url: string
  created: string
}
