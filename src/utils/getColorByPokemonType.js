import { POKEMON_TYPE_COLORS } from "../config/config";

export const getColorByPokemonType = (type) =>
  POKEMON_TYPE_COLORS[type.toLowerCase()];
