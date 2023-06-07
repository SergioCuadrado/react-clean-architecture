import { Roles, type ApiUser, type User } from '../../../../models'

export const RickAndMortyAdapter = (user: ApiUser): User => {
  return {
    id: user.id,
    name: user.name,
    email: 'prueba@gmail.com',
    role: Roles.ADMIN
  }
}
