import { NextApiRequest, NextApiResponse } from "next";
import { SitemapStream, streamToPromise } from "sitemap";
import { Readable } from "stream";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    // An array with your links
    const links = [
        { url: "/", changefreq: "daily", priority: 1 },
        { url: "/advertise", changefreq: "daily", priority: 0.3 },
        { url: "/contact", changefreq: "daily", priority: 0.3 },
        { url: "/privacy-policy", changefreq: "daily", priority: 0.3 },
    ];

    // Create a stream to write to
    const stream = new SitemapStream({ hostname: `https://${req.headers.host}` });

    res.writeHead(200, {
        "Content-Type": "application/xml",
    });

    const xmlString = await streamToPromise(
        Readable.from(links).pipe(stream)
    ).then((data) => data.toString());

    res.end(xmlString);
};