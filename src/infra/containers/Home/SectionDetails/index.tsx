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
                    <li>3 - Click on the button "Download"</li>
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

            {/* <h3>Supported platforms</h3>

            <ul>
                <li>Youtube</li>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Twitter</li>
                <li>SoundCloud</li>
                <li>Spotify</li>
                <li>And more...</li>
            </ul> */}

            <div>
                <h3>Which Bronwsers are suported?</h3>

                <p>Our system is suported by all browsers, but we recommend the use of Google Chrome.</p>

                <h3>How can I get a link from Youtube?</h3>
                <p> To get a link from Youtube, you need to access the video you want to download, then copy the URL from the browser and paste it in the input field.</p>

            </div>

        </div>

    )
}

export { SectionDetails }
