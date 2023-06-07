import { RickAndMortyAdapter } from '../adapter/rickAndMorty.adapter'

export const rickAndMortyUrl = 'https://rickandmortyapi.com/api/character/2'

export const fetchMorty = async (url: string) => {
  return await fetch(url)
    .then(res => res.json())
    .then(res => RickAndMortyAdapter(res))
}
