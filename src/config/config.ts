const config = {
    pageSize: "12",
    sortOrderConfigPath: "/config/sorting-config.json",
    menuOpenDuration: 0.36
};
export default config;

export const apiParamsConfig = {
    genres: {
        endpoint: "/genres",
        requestParams: {
            params: {
                ordering: "name"
            }
        },
        staleTime: "static"
    },
    platforms: {
        endpoint: "/platforms/lists/parents",
        requestParams: {
            params: {
                ordering: "slug"
            }
        },
        staleTime: "static"
    }
}