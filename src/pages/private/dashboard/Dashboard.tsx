import { getValidationError } from '../../../utilities'
import { RickAndMorty } from './components/RickAndMorty'
import { ErrorBoundary, type FallbackProps } from 'react-error-boundary'

const Fallback: React.FC<FallbackProps> = ({ error, resetErrorBoundary }) => (
  <div role="alert">
    <p>Something went wrong:</p>
    <pre style={{ color: 'red' }}>{getValidationError(error.code)}</pre>
  </div>
)

const logError = (error: Error, info: { componentStack: string }) => {
  console.log(error, info)
}

const Dashboard = () => {
  return (
    <>
      <div>Dashboard</div>
      <ErrorBoundary FallbackComponent={Fallback} onError={logError}>
        <RickAndMorty />
      </ErrorBoundary>
    </>
  )
}

export default Dashboard
