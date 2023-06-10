import { useEffect, useState } from 'react'
import { TestingService } from './services/rickAndMorty.service'

const Dashboard = () => {
  const [morty, setMorty] = useState({})

  useEffect(() => {
    TestingService().then((res) => { setMorty(res) }).catch((err) => { return err })
  }, [])

  return (
    <>
      <div>Dashboard</div>
      <p>{JSON.stringify(morty)}</p>
    </>
  )
}
export default Dashboard
