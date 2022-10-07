
interface IVideoFormat {
    quality: string;
    itag: number;
    hasVideo: boolean;
    hasAudio: boolean;
    format: string;
    contentLength: string;
};

export type { IVideoFormat }