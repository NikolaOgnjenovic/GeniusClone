export interface CreateSongRequest {
    songData: ArrayBuffer;
    isPendingReview: boolean;
    title: string;
}