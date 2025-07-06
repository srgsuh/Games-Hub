import type {PlatformData} from "../model/FetchGameTypes.ts";
import useFetchData from "./useFetchData.ts";
import type {FetchedData} from "../model/FetchDataTypes.ts";

export default function useFetchPlatforms(): FetchedData<PlatformData> {
    return useFetchData<PlatformData>("/platforms/lists/parents", {params: {ordering: "slug"}});
}