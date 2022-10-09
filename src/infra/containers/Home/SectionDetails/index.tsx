import Image from "next/image"
import image from "../../../assets/6cc1604b-586c-465a-9df4-f76035a2db83.png"
import style from "./index.module.css"
import homeStyle from "../index.module.css"
const SectionDetails = () => {


    return (
        <div className={homeStyle["section"]}>
            <p> The SaveDownHere is a great service for those looking for a system to save videos and music from YouTube, our system has what is most modern for the conversion of videos into audios and allows the download of videos in various formats, as long as the video is in good quality.</p>

            <p> Now you don&apos;t need to worry about add  some extention to your browser, just use our system and download your favorite videos and audios.</p>


            <div className={style["section-details-content"]}>
                <h3>How to do the download?</h3>

                <p>Folow those steps</p>

                <ul>
                    <li>1 - Copy the URL of the video you want to download</li>
                    <li>2 - Paste the URL in the input field</li>
                    <li>3 - Click on the button &quot;Download&quot;</li>
                    <li>4 - Our system will process the link and will return the video in diferent formats</li>
                    <li>5 - Now you can choose the format you want and click on option.</li>
                    <li>6 - The download will start automatically</li>
                </ul>

                <Image src={image}
                    height={400}
                    width={800}
                    layout="responsive"
                    alt="Download image"
                />
            </div>


            <div>
                <h3>Service Resources and Technologies</h3>


                <ul>

                    <li>
                        <h4>
                            Instant Download
                        </h4>
                        <p>
                            Our system is very fast, it will return the video in a few seconds.
                            It&lsquo;s basieded in inteligent algorithms that will process the video and return the result in the speed of light. In this place you just need to follow some steps and the results will be in your hands. You wont need to log in or create an account, just use our system and download your favorite videos and audios.

                        </p>
                    </li>

                    <li>
                        <h4>Video Visualization</h4>
                        <p>
                            While copying the URL of video you can make a mistake and copy the wrong URL, so we have a feature that allows you to visualize the video before downloading it. This way you can be sure that you are downloading the right video.
                        </p>
                    </li>

                    <li>
                        <h4>Video with High Quality</h4>

                        <p>
                            While downloding the video you can choose the quality of the video, we have the following options: 144p, 240p, 360p, 480p, 720p, 1080p, 1440p, 2160p, 4320p. The higher the quality, the larger the file size.
                        </p>

                    </li>

                    <li>
                        <h4>Download in Various Formats</h4>
                        <p>
                            Download videos and musics from Youtube in various formats like .mp3, .mp4 ... for all devices (PC, Mac, Android, iOS)
                        </p>
                    </li>
                </ul>
            </div>

            <div>
                <h3>Which Bronwsers are suported?</h3>

                <p>Our system is suported by all browsers, but we recommend the use of Google Chrome.</p>

                <h3>How can I get a link from Youtube?</h3>
                <p>
                    In the browser, open the video you want to download, copy the link from the address bar and paste it in the input field.
                </p>

                <p>
                    In the Youtube app, you can get the link by clicking on the share button and then copying the link.</p>

            </div>

        </div>

    )
}

export { SectionDetails }
