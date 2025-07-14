import type {PlatformData} from "../model/FetchGameTypes.ts";
import useFetchData from "./useFetchData.ts";

export default function useFetchPlatforms() {
    return useFetchData<PlatformData>("/platforms/lists/parents", {params: {ordering: "slug"}});
}