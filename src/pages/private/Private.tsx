import { Navigate, Route } from 'react-router-dom'
import { RoutesWithNotFound } from '../../utilities'
import { PrivateRoutes } from '../../models'
import { lazy } from 'react'

const Dashboard = lazy(() => import('./dashboard/Dashboard'))
// const Home = lazy(async () => await import('./home/Home'))

export const Private = () => {
  return (
    <RoutesWithNotFound>
      <Route path="/" element={<Navigate to={PrivateRoutes.DASHBOARD} />} />
      <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
      {/* <Route path={PrivateRoutes.HOME} element={<Home />} /> */}
    </RoutesWithNotFound>
  )
}
