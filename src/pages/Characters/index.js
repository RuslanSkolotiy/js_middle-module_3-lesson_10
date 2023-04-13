import { lazy } from "react";

const CharactersDetail = lazy(() => import("./CharactersDetail"));
const CharactersList = lazy(() => import("./CharactersList"));

export { CharactersDetail, CharactersList };
