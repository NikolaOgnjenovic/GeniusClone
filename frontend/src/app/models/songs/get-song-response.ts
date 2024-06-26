export interface GetSongResponse {
    id: string;
    songData: ArrayBuffer;
    isPendingReview: boolean;
    title: string;
}