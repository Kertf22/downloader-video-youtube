import { videoFormat } from "ytdl-core";
import { IVideoFormat } from "../types/videoFormats";

interface ReducedFormatData {
    "mp4": IVideoFormat[];
    "webm": IVideoFormat[];
}

// export const oldformatInfo = (formats: videoFormat[]) => {

//     const formatsData: ReducedFormatData = {
//         "mp4": [],
//         "webm": [],
//     }

//     Object.keys(formatsData).forEach((key: string) => {
//         let qualityPerFormat = formats
//             .filter(format => format.container === key && format.qualityLabel)
//             .map(format => ({
//                 quality: format.qualityLabel, itag: format.itag, hasVideo: format.hasVideo,
//                 hasAudio: format.hasAudio, contentLength: format.contentLength

//             })).sort((format_a, format_b) => {
//                 const contentLength_a = Number(format_a.contentLength);
//                 const contentLength_b = Number(format_b.contentLength);
//                 if (contentLength_a < contentLength_b) return -1;
//                 else if (contentLength_a > contentLength_b) return 1;
//                 else return 0
//             });

//         formatsData[key as keyof ReducedFormatData] = qualityPerFormat
//     })

//     return formatsData
// };

export const formatInfo = (formats: videoFormat[]) => {

    const filterFormatsPerAudioAndVideo = (formats: videoFormat[]) =>
        formats.filter(format =>
            (format.hasAudio && format.hasVideo && format.qualityLabel) ||
            // (!format.hasAudio && format.hasVideo && format.qualityLabel) ||
            (format.hasAudio && !format.hasVideo)
        )


    const mapperFormats = (format: videoFormat[]) => format.map(format => ({
        quality: format.qualityLabel,
        itag: format.itag,
        hasVideo: format.hasVideo,
        hasAudio: format.hasAudio,
        format: format.container,
        contentLength: format.contentLength,
    }))


    
    // console.log(filterFormatsPerAudioAndVideo(formats))

    const formatsData = mapperFormats(filterFormatsPerAudioAndVideo(formats))
        .sort((format_a, format_b) => {
            const contentLength_a = Number(format_a.contentLength);
            const contentLength_b = Number(format_b.contentLength);

            // Se tem audio e video
            if (format_a.hasAudio && format_a.hasVideo) {
                return -1
            } else {
                return 1
            }

        });

    return formatsData
}