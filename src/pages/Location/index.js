import { lazy } from "react";

const LocationDetail = lazy(() => import("./LocationDetail"));
const LocationList = lazy(() => import("./LocationList"));

export { LocationDetail, LocationList };
