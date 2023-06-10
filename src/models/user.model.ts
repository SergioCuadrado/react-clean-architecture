import { type Roles } from '.'

export interface User {
  id: string
  name: string
  email: string
  role: Roles
}
