import { lazy } from "react";

const EpisodeDetail = lazy(() => import("./EpisodeDetail"));
const EpisodeList = lazy(() => import("./EpisodeList"));

export { EpisodeDetail, EpisodeList };
