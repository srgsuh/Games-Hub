export interface FetchDataResponse<T> {
    count: number;
    results: T[];
}

export interface FetchedData<T> {
    data: T[];
    error: string;
    isLoading: boolean;
}