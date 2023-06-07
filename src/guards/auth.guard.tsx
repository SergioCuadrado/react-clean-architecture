import { Navigate, Outlet } from 'react-router-dom'
import { PrivateRoutes, PublicRoutes, Roles, type User } from '../models'

interface Props {
  privateValidation: boolean
}

const PrivateValidationFragment = <Outlet />
const PublicValidationFragment = <Navigate replace to={PrivateRoutes.PRIVATE} />

const userFake: User = {
  id: '4352-1233-123-123-123',
  name: 'Jhon Doe',
  email: 'jhondoe@gmail.com',
  role: Roles.ADMIN
}

export const AuthGuard = ({ privateValidation }: Props) => {
  if (userFake.name.length > 0) {
    // Si tiene un nombre y la validación es privada, entonces se muestra el contenido privado
    return privateValidation
      ? (
          PrivateValidationFragment
        )
      : (
          PublicValidationFragment
        )
  }

  return <Navigate replace to={PublicRoutes.LOGIN} />
}

export default AuthGuard
