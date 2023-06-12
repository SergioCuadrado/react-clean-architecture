import axios from 'axios'
import { RickAndMortyAdapter } from '../adapter/rickAndMorty.adapter'
import { type ApiRickAndMorty } from '../models/rickAndMorty.model'
// import { RickAndMortyAdapter } from '../adapter/rickAndMorty.adapter'

export const rickAndMortyUrl = 'https://aaaarickandmortyapi.com/api/character'

export const fetchRickAndMorty = async () => {
  const { data } = await axios.get(rickAndMortyUrl)
  const adaptedResults = data.results.map((result: ApiRickAndMorty) => RickAndMortyAdapter(result))
  return adaptedResults
}


export const TestingService = () => {
  return axios.get('https://rickandmortyapi.com/api/character/2')
}
