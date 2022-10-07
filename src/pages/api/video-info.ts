// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import ytdl from 'ytdl-core';
import { IVideoFormat } from '../../types/videoFormats';
import { formatInfo } from '../../util/formatInfo';


export interface ResponseVideoInfo {
    videoId: string;
    title: string;
    videos: IVideoFormat[];
    tumbleImage:string;
}




interface Error {
    error: string;
}
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseVideoInfo | Error>
) {

    const url = req.query.url as string;

    if (!url) return res.status(400).json({ error: "Url not informed" });

    if (!ytdl.validateURL(url)) return res.status(400).json({ error: "Invalid youtube url" });

    try {
        const info = await ytdl.getInfo(url);

        const reducedFormatData = formatInfo(info.formats);

        res.status(200).json({
            videoId: info.videoDetails.videoId,
            title: info.videoDetails.title,
            tumbleImage:info.videoDetails.thumbnails[0].url, 
            videos: reducedFormatData,
        })
    } catch (err: any) {
        return res.status(400).json({ error: "Invalid youtube url" });
    }
};


