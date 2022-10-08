// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import ytdl, { videoFormat } from 'ytdl-core';
import { promisify } from "util";
import { pipeline } from "stream";
import { v4 } from "uuid";

const pipelineAsync = promisify(pipeline);

interface Error {
    error: string;
}

export const config = {
    api: {
        responseLimit: "350mb",
    },
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<string | Error>
) {

    const { videoId, itag } = req.query;

    if (!videoId) res.status(400).json({ error: "Video id not informed!" });

    if (!itag) res.status(400).json({ error: "Format not informed!" });

    const videoUrl = `http://www.youtube.com/watch?v=${videoId}`;

    const info = await ytdl.getInfo(videoUrl);
    const format = info.formats.find((format: videoFormat) =>
        format.itag === Number(itag)
    );

    if (!format) res.status(400).json({ error: "Format not founded!" });

    // Make the read thought stream chunk by chunk

    const video = ytdl(videoUrl, { format });

    res.setHeader("Content-Disposition", `attachment; filename="${v4()}.${format?.container}"`);
    res.setHeader("Content-Type", `${format?.mimeType}`);


    if (format?.contentLength) res.setHeader("Content-Length", `${format?.contentLength}`);



    video.on("open", () => {
        video.pipe(res);
    });

    video.on("data", (chunk) => {
        res.write(chunk);
    });
    video.on("end", () => {
        res.end();

        res.send("<script>window.close();</script > ")
    });
};


