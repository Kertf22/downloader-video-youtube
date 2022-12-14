import { IVideoFormat } from '../../../types/videoFormats';
import styles from './index.module.css';
import { BsFillCameraVideoFill } from 'react-icons/bs';
import { GiSpeaker, GiSpeakerOff } from 'react-icons/gi';
import { formatBytes } from '../../../util/formtaBytes';

interface IVideoCardProps extends IVideoFormat {
    videoId: string;
}

const VideoCard = ({ format, itag, quality, videoId, hasAudio, hasVideo, contentLength }: IVideoCardProps) => {

    // Colocar funcao em outro lugar
    const fetchDownloadVideo = () => {
        window.open("/api/download-video?videoId=" + videoId + "&itag=" + itag);
    }

    return (
        <div className={styles["video-link"]}>

            <div className={styles.row}>
                <div className={styles["video-link__info"]}>
                    <div className={styles.block} onClick={e => fetchDownloadVideo()}

                        style={{ backgroundColor: hasVideo && hasAudio ? "#7ab946" : "#b94646" }}>

                        <span>{quality} {format}</span>

                        <span>
                            {hasAudio ? <GiSpeaker /> : <GiSpeakerOff />}
                            {hasVideo && <BsFillCameraVideoFill />}
                        </span>

                        <span>
                            {contentLength ? `(${formatBytes(Number(contentLength))})` : "Not informed"}
                        </span>

                    </div>
                </div>
            </div>

        </div>)
};

export { VideoCard };