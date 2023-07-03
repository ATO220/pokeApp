import { API_HOST } from "../config/config";

export async function getPokemonsApi(endpointUrl) {
  try {
    const url = `${API_HOST}/pokemon?limit=20&offset=0`;
    const response = await fetch(endpointUrl || url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw new Error(`Failed fetch pokeapi : ${error}`);
  }
}

export const getPokemonDetailsByUrlApi = async (url) => {
  try {
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw new Error(`Failed fetch pokemon detail by url : ${error}`);
  }
};

export const getPokemonDetailsByIdApi = async (id) => {
  try {
    const url = `${API_HOST}/pokemon/${id}`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw new Error(`Failed fetch pokemon detail by id ${id} : ${error}`);
  }
};

export const searchPokemonByNameApi = async (name) => {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw new Error(`Failed fetch pokemon by name ${name} : ${error}`);
  }
};
