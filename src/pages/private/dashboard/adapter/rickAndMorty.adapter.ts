import { type ApiRickAndMorty, type RickAndMortyModel } from '../models/rickAndMorty.model'

export const RickAndMortyAdapter = (user: ApiRickAndMorty): RickAndMortyModel => {
  return {
    id: user.id,
    name: user.name,
    status: user.status,
    species: user.species,
    gender: user.gender,
    image: user.image
  }
}
