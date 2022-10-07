import { ResponseVideoInfo } from "../../../../pages/api/video-info";
import { VideoCard } from "../../../components/VideoCard";
import styles from "./index.module.css";

interface IVideoCardProps extends ResponseVideoInfo { }

const VideoCardList = ({ videos, title, tumbleImage, videoId }: IVideoCardProps) => {
    return (
        <>
            <div className={styles["video-card-container"]}>

                <div className={styles["video-card-thumbnail"]}>

                    <img className={styles["tumble-image"]} src={tumbleImage} />

                    <h4 className={styles["title"]}>{title}</h4>
                </div>
                <div className={styles["video-card-list"]}>
                    {videos.map((format, index) => (
                        <VideoCard
                            key={index} {...format}
                            videoId={videoId}
                        />
                    ))}
                </div>

            </div>
        </>
    )
}

export { VideoCardList }