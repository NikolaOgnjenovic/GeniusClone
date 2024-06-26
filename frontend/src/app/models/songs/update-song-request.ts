export interface UpdateSongRequest {
    songData: ArrayBuffer;
    isPendingReview: boolean;
    title: string;
}