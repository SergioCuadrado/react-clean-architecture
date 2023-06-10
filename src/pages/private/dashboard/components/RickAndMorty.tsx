import { useEffect, useState } from 'react'
import { fetchRickAndMorty } from '../services/rickAndMorty.service'
import { type RickAndMortyModel } from '../models/rickAndMorty.model'
import ContentLoader from 'react-content-loader'

export const RickAndMorty = () => {
  const [data, setData] = useState<RickAndMortyModel[]>([])
  useEffect(() => {
    fetchRickAndMorty().then((res) => { setData(res) }).catch((err) => { console.log(err) })
  }, [])

  if (!data.length) {
    return (
      <Skeleton />
    )
  }

  return (
    <div>
      <h1>Rick and Morty</h1>
      {data.map((item) => (
        <div key={item.id}>
          <img src={item.image} alt={item.name} />
          <h2>{item.name}</h2>
          <p>{item.species}: <b>{item.gender}</b></p>
        </div>
      ))}
    </div>
  )
}

const Skeleton = () => (
  <ContentLoader viewBox="0 0 500 280" height={280} width={500}>
    <rect x="3" y="3" rx="10" ry="10" width="300" height="180" />
    <rect x="6" y="190" rx="0" ry="0" width="292" height="20" />
    <rect x="4" y="215" rx="0" ry="0" width="239" height="20" />
    <rect x="4" y="242" rx="0" ry="0" width="274" height="20" />
  </ContentLoader>
)
