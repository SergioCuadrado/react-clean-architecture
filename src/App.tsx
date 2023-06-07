import { lazy, Suspense } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'
import { PrivateRoutes, PublicRoutes } from './models/routes.model'
import { RoutesWithNotFound } from './utilities'
import RoleGuard from './guards/role.guard'
import { Roles } from './models'
import AuthGuard from './guards/auth.guard'

const Login = lazy(() => import('./pages/login/Login'))
const Dashboard = lazy(() => import('./pages/private/dashboard/Dashboard'))
const Private = lazy(async () => {
  const module = await import('./pages/private/Private')
  return { default: module.Private }
})

function App () {
  return (
    <Suspense fallback={<>Cargando</>}>
      <BrowserRouter>
        <RoutesWithNotFound>
          <Route path={PublicRoutes.LOGIN} element={<Login />} />
          <Route element={<AuthGuard privateValidation={true} />}>
              <Route path={`${PrivateRoutes.PRIVATE}/*`} element={<Private />} />
            </Route>
          <Route element={<RoleGuard role={Roles.ADMIN} />}>
            <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
          </Route>
        </RoutesWithNotFound>
      </BrowserRouter>
    </Suspense>
  )
}

export default App
