export interface ApiRickAndMorty {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  image: string
  episode: string[]
  url: string
  created: string
}

export interface RickAndMortyModel {
  id: number
  name: string
  status: string
  species: string
  gender: string
  image: string
}
