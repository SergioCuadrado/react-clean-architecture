import { Navigate, Outlet } from 'react-router-dom'
import { PrivateRoutes, type User, Roles } from '../models'

interface Props {
  role: Roles
}

const userFake: User = {
  id: '4352-1233-123-123-123',
  name: 'Jhon Doe',
  email: 'jhondoe@gmail.com',
  role: Roles.ADMIN
}

function RoleGuard ({ role }: Props) {
  return userFake.role === role ? <Outlet /> : <Navigate replace to={PrivateRoutes.PRIVATE} />
}
export default RoleGuard
